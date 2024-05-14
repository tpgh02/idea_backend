package hello.hellospring.domain;

import hello.hellospring.DTO.MemberData;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private MemberClassify memberClassify;
    private String email;
    private String password;
    private String language;
    private String experience;
    private String skill;
    private String etc;

    @OneToMany
    private List<Board> boards;

    public void update(MemberData member){
        if(member.getName()!= null){ this.name = member.getName();}
        if(member.getEmail()!= null){ this.email = member.getEmail();}
        if(member.getLanguage()!= null){ this.language = member.getLanguage();}
        if(member.getExperience()!= null){ this.experience = member.getExperience();}
        if(member.getSkill()!= null){ this.skill = member.getSkill();}
        if(member.getEtc()!= null){ this.etc = member.getEtc();}
    }
}
