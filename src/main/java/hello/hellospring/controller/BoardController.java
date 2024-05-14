package hello.hellospring.controller;

import hello.hellospring.DTO.BoardData;
import hello.hellospring.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;

    @PostMapping("/new")
    public ResponseEntity<?> boardCreate(@RequestBody BoardData boardData) {
        boardService.create(boardData);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/list")
    public List<BoardData> boardList() {
        return boardService.getBoardList();
    }

    @GetMapping("/mylist/{memberId}")
    public List<BoardData> myBoardList(@PathVariable Long memberId) {
        return boardService.getMyBoardList(memberId);
    }

    @GetMapping("/search/{keyword}")
    public List<BoardData> searchBoard(@PathVariable String keyword) {
        return boardService.searchBorad(keyword);
    }
}
