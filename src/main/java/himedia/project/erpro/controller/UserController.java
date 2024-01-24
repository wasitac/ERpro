package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.dto.Password;
import himedia.project.erpro.dto.Profile;
import himedia.project.erpro.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;
	
	// 메인페이지 - 이지홍
	@GetMapping("/home/{menu}")
	public String home(@PathVariable(value="menu") String menu) {
		// menu로 테이블 찾아서 반환하기
		return menu + "테이블";
	}

	// 회원정보 수정폼 - 이지홍
	@GetMapping("/profile")
	public Profile profile() {
		
		// 유저정보와 일치하는 유저데이터 받아오기
		Profile profile = new Profile("이미자", "111111", "1969-04-23", "010-8888-7777", "mija@gmail.com", "영업", "부장", "2010-10-23");
		return profile;
	}

	// 회원정보 수정 - 이지홍
	@PutMapping("/profile")
	public String putProfile(@RequestBody Profile profile) {
		// 첫번째 파라미터 userid로 바꾸기
		userService.updateProfile(1l, profile);
		return "redirect:/profile";
	}

	// 비밀번호 수정 - 이지홍
	@PutMapping("/password")
	public String putPassword(@RequestBody Password password) {
		// 첫번째 파라미터 userid로 바꾸기
		userService.updatePassword(1l, password);
		return "redirect:/profile";
	}
}
