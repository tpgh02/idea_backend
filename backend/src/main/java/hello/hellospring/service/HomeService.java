package hello.hellospring.service;

import hello.hellospring.DTO.BoardData;
import hello.hellospring.DTO.BoardMemberData;
import hello.hellospring.DTO.MemberData;
import hello.hellospring.domain.Board;
import hello.hellospring.domain.Member;
import hello.hellospring.domain.MemberClassify;
import hello.hellospring.repository.BoardRepository;
import hello.hellospring.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class HomeService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;
    public BoardMemberData getRandom() {
        long qty = memberRepository.countByMemberClassify(MemberClassify.DEVELOPER);
        long qty2 = boardRepository.count();
        int idx = (int)(Math.random() * qty);
        int idx2 = (int)(Math.random() * qty2);

        Page<Member> memberPage = memberRepository.findAllByMemberClassify(MemberClassify.DEVELOPER,
                PageRequest.of(idx, 1));

        Page<Board> boardPage = boardRepository.findAll(
                PageRequest.of(idx2, 1));

        if(memberPage.getContent().isEmpty() && boardPage.getContent().isEmpty()) {
            return new BoardMemberData(null, null);
        }
        else if(memberPage.getContent().isEmpty()) {
            return new BoardMemberData(null, new BoardData(boardPage.getContent().get(0)));
        }
        else if(boardPage.getContent().isEmpty()){
            return new BoardMemberData(new MemberData(memberPage.getContent().get(0)), null);
        }
        Member member = memberPage.getContent().get(0);
        Board board = boardPage.getContent().get(0);
        return new BoardMemberData(new MemberData(member), new BoardData(board));

    }
}
