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
import himedia.project.erpro.member.service.ProfileService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProfileController {

	private final ProfileService profileService;

	// 회원정보 수정 - 이지홍
	@PutMapping("/api/profile")
	public ResponseEntity<Message<String>> putProfile(@RequestBody ProfileFormDto profile) {
		Message<String> message = profileService.updateProfile(profile);
		return new ResponseEntity<>(message, HttpStatus.OK);
	}

	// 비밀번호 수정 - 이지홍
	@PutMapping("/api/password")
	public ResponseEntity<Message<String>> putPassword(@RequestBody PasswordFormDto password) {
		Message<String> message = profileService.updatePassword(password);
		return new ResponseEntity<>(message, HttpStatus.OK); 
	}
}
