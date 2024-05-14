package hello.hellospring.DTO;

import hello.hellospring.domain.Member;
import hello.hellospring.domain.MemberClassify;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class SignUpData {
    private Long id;
    private String name;
    private String password1;
    private String password2;
    private String email;
    private MemberClassify memberClassify;
    private String language;
    private String experience;
    private String skill;
    private String etc;
}

