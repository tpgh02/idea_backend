package hello.hellospring.DTO;

import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
@Getter
public class BoardMemberData {
    private MemberData memberData;
    private BoardData boardData;

    public BoardMemberData(MemberData memberData, BoardData boardData) {
        this.memberData = memberData;
        this.boardData = boardData;
    }
}
