package uk.co.simonaust.springreacttemplate;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

  @GetMapping("/hello")
  String getHello() {
    return "Hello, world";
  }

  @GetMapping("/user")
  User getUser() {
    User user = new User("0", "Joe", "joe_bloggs@hotmail.com");
    return user;
  }

}
