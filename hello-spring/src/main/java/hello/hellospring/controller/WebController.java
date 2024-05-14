package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {"/", "/board","/developers", "/developers1", "/main-log-in", "/post"})
    public String forward() {
        return "forward:/index.html";
    }

}
