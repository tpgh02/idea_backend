package hello.hellospring.controller;

import hello.hellospring.DTO.LoginData;
import hello.hellospring.DTO.MemberData;
import hello.hellospring.DTO.SignUpData;
import hello.hellospring.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/new")
    public ResponseEntity<?> memberCreate(@RequestBody SignUpData signUpData) {
        memberService.join(signUpData);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/validate")
    public ResponseEntity<?> validate(@RequestBody SignUpData signUpData) {
        memberService.validate(signUpData);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public MemberData memberLogin(@RequestBody LoginData login) {
        return memberService.login(login);
    }

    @GetMapping("/developers")
    public List<MemberData> getDevelopers() {
        return memberService.getDevelopers();
    }

    @GetMapping("/search/{keyword}")
    public List<MemberData> searchMember(@PathVariable String keyword) {
        return memberService.searchMember(keyword);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateMember(@RequestBody MemberData memberData) {
        memberService.updateMember(memberData);
        return ResponseEntity.ok().build();
    }
}
