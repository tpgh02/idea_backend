package hello.hellospring.service;

import hello.hellospring.DTO.LoginData;
import hello.hellospring.DTO.MemberData;
import hello.hellospring.DTO.SignUpData;
import hello.hellospring.domain.Member;
import hello.hellospring.exception.MemberException;
import hello.hellospring.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import hello.hellospring.domain.MemberClassify;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;


    public void join(SignUpData signUpData){
        validate(signUpData);

        memberRepository.save(Member.builder()
                .name(signUpData.getName())
                .memberClassify(signUpData.getMemberClassify())
                .email(signUpData.getEmail())
                .password(passwordEncoder.encode(signUpData.getPassword1()))
                .language(signUpData.getLanguage())
                .experience(signUpData.getExperience())
                .skill(signUpData.getSkill())
                .etc(signUpData.getEtc())
                .build());
    }

    public void validate(SignUpData signUpData){
        validateDuplicateMember(signUpData);

        if (!signUpData.getPassword1().equals(signUpData.getPassword2())){
            throw new MemberException("비밀번호가 일치하지 않습니다.");
        }
    }

    private void validateDuplicateMember(SignUpData signUpData) {
        Optional<Member> result = memberRepository.findByName(signUpData.getEmail());
        result.ifPresent(m -> {
            throw new MemberException("이미 존재하는 회원입니다.");
        });
    }

    public List<MemberData> getDevelopers(){
        List<Member> members = memberRepository.findAll();
        return members.stream()
                .filter(m -> m.getMemberClassify().equals(MemberClassify.DEVELOPER))
               .map(MemberData::new)
               .toList();
    }

    public MemberData login(LoginData loginData) {
        Member member = memberRepository.findByEmail(loginData.getEmail())
                .orElseThrow(() -> new MemberException("존재하지 않는 회원입니다."));

        if(!member.getPassword().equals(loginData.getPassword())){
            throw new MemberException("비밀번호가 일치하지 않습니다.");
        }

        log.info("member Id : {}", member.getId());

        return new MemberData(member);
    }

    public List<MemberData> searchMember(String keyword){
        log.info("keyword : {}", keyword);

        List<MemberData> name = memberRepository.findAllByNameContaining(keyword)
                .orElseThrow(() -> new MemberException("해당 이름의 개발자가 없습니다."))
                .stream().map(MemberData::new).toList();
        List<MemberData> language = memberRepository.findAllByLanguageContaining(keyword)
                .orElseThrow(() -> new MemberException("해당 언어를 사용하는 개발자가 없습니다."))
                .stream().map(MemberData::new).toList();

        return Stream.of(name, language)
                .distinct()
                .flatMap(Collection::stream)
                .toList();
    }

    public void updateMember(MemberData memberData){
        Member member = memberRepository.findById(memberData.getId())
               .orElseThrow(() -> new MemberException("존재하지 않는 회원입니다."));

        log.info("memberData : {}", memberData);
        member.update(memberData);
        memberRepository.save(member);
    }
}
