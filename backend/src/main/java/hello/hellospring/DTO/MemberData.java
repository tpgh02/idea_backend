package hello.hellospring.DTO;

import hello.hellospring.domain.Member;
import hello.hellospring.domain.MemberClassify;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class MemberData {
    private Long id;
    private String name;
    private String password;
    private String email;
    private MemberClassify memberClassify;
    private String language;
    private String experience;
    private String skill;
    private String etc;

    public MemberData(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.password = member.getPassword();
        this.email = member.getEmail();
        this.memberClassify = member.getMemberClassify();
        this.language = member.getLanguage();
        this.experience = member.getExperience();
        this.skill = member.getSkill();
        this.etc = member.getEtc();
    }
}
