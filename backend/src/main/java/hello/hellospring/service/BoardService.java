package hello.hellospring.service;

import hello.hellospring.DTO.BoardData;
import hello.hellospring.domain.Board;
import hello.hellospring.domain.Member;
import hello.hellospring.exception.BoardException;
import hello.hellospring.exception.MemberException;
import hello.hellospring.repository.BoardRepository;
import hello.hellospring.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;
    public void create(BoardData boardData) {
        Member member = memberRepository.findById(boardData.getWriterId())
                .orElseThrow(() -> new MemberException("존재하지 않는 회원입니다."));

        if(boardData.getTitle() == null) {throw new BoardException("제목을 입력해주세요.");}
        if(boardData.getContent() == null) {throw new BoardException("내용을 입력해주세요.");}

        boardRepository.save(Board.builder()
                        .title(boardData.getTitle())
                        .content(boardData.getContent())
                        .member(member)
                        .createdDate(LocalDateTime.now())
                        .build());
    }

    public List<BoardData> getBoardList() {
        return boardRepository.findAll()
               .stream()
               .map(BoardData::new)
               .toList();
    }

    public List<BoardData> getMyBoardList(Long memberId){
        return boardRepository.findAllByMemberId(memberId)
                .orElseThrow(() -> new BoardException("글이 없습니다."))
               .stream()
               .map(BoardData::new)
               .toList();
    }

    public List<BoardData> searchBorad(String keyword){
        log.info("keyword : {}", keyword);

        List<BoardData> title = boardRepository.findAllByTitleContaining(keyword)
                .orElseThrow(() -> new BoardException("해당 제목의 게시글이 없습니다."))
                .stream().map(BoardData::new).toList();
        List<BoardData> content = boardRepository.findAllByContentContaining(keyword)
                .orElseThrow(() -> new BoardException("해당 내용의 게시글이 없습니다."))
                .stream().map(BoardData::new).toList();

        return Stream.of(title, content)
                .distinct()
                .flatMap(Collection::stream)
                .toList();
    }
}
