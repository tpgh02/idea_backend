package hello.hellospring.controller;

import hello.hellospring.DTO.BoardMemberData;
import hello.hellospring.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final HomeService homeService;

    @GetMapping("/home")
    public BoardMemberData home() {

        return homeService.getRandom();
    }
}
