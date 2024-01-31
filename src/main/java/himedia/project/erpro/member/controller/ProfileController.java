package himedia.project.erpro.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.member.dto.PasswordFormDto;
import himedia.project.erpro.member.dto.ProfileFormDto;
import himedia.project.erpro.member.service.MemberService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProfileController {
	
	private final ProfileService profileService;
	
	// 회원정보 수정폼 - 이지홍
	@GetMapping("/profile")
	public ResponseEntity<Message> profile() {
		// 유저정보와 일치하는 유저데이터 받아오기
		ProfileFormDto data = profileService.getMemberProfile();
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	// 회원정보 수정 - 이지홍
	@PutMapping("/profile")
	public String putProfile(@RequestBody ProfileFormDto profile) {
		// 첫번째 파라미터 memberid로 바꾸기
		profileService.updateProfile(profile);
		return "redirect:/profile";
	}

	// 비밀번호 수정 - 이지홍
	@PutMapping("/password")
	public String putPassword(@RequestBody PasswordFormDto password) {
		// 첫번째 파라미터 memberid로 바꾸기
		profileService.updatePassword(password);
		return "redirect:/profile";
	}
}
