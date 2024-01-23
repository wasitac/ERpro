package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	@GetMapping("/login")
	public String login() {
		return "로그인 페이지";
	}
}
