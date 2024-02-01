package himedia.project.erpro.member.controller;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.member.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Iterator;

@RestController
@RequiredArgsConstructor
public class LoginController {

	private final LoginService loginService;

	@GetMapping("/login")
	public String login() {
		
		// 로그인 계정정보, role 확인 예제코드
		String userId = SecurityContextHolder.getContext().getAuthentication().getName();

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
		Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
		GrantedAuthority auth = iterator.next();

		String role = auth.getAuthority();

		System.out.println("userId: "+userId);
		System.out.println("role: "+role);

		return "로그인 페이지";
	}

	// 비밀번호 찾기 - 김주원
	@PostMapping("/findpassword")
	public ResponseEntity<Message> findPassword(@RequestBody Long memberId) {

		String result = loginService.findPassword(memberId);
		return new ResponseEntity<>(new Message(result), HttpStatus.OK);
	}
}
