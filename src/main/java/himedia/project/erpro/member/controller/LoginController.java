package himedia.project.erpro.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.member.service.LoginService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class LoginController {

	private final LoginService loginService;

	@GetMapping("/login")
	public String login() {
		
		System.out.println("로그인");
		return "로그인 페이지";
	}
	
	// 비밀번호 찾기 - 김주원
	@PostMapping("/findpassword")
	public ResponseEntity<Message<String>> findPassword(@RequestBody Long memberId) {

		String result = loginService.findPassword(memberId);
		return new ResponseEntity<>(new Message<String>(result), HttpStatus.OK);
	}
}
