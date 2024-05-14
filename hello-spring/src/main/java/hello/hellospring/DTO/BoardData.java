package hello.hellospring.DTO;

import hello.hellospring.domain.Board;
import hello.hellospring.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class BoardData {
    private String title;
    private String content;
    private Long writerId;
    private String writerName;
    private String writerEmail;
    private String createdDate;

    public BoardData(Board board) {
        this.title = board.getTitle();
        this.content = board.getContent();
        this.createdDate = board.getCreatedDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.writerName = board.getMember().getName();
        this.writerEmail = board.getMember().getEmail();
    }
}
