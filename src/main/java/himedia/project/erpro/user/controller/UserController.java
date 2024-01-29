package himedia.project.erpro.user.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.user.dto.Password;
import himedia.project.erpro.user.dto.Profile;
import himedia.project.erpro.user.entity.User;
import himedia.project.erpro.user.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;
	
	// 사원 대장 - 김주원
	@GetMapping("/user")
	public ResponseEntity<Message> user() {
		List<User> dataList = userService.getUserAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 상세 정보 조회
	@GetMapping("/user/{id}")
	public ResponseEntity<Message> detailUser(@PathVariable(value="id") Long id) {
		Optional<User> data = userService.getUserById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);	
	}
	
	// 사원 추가 - 김주원
	@PostMapping("/user")
	public ResponseEntity<Message> createUser(@RequestBody User user) {
		String result = userService.createUser(user);
		Message returnData = new Message<>("저장 성공",result);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 대장 수정 - 김주원
	@PutMapping("/user")
	public ResponseEntity<Message> editUser(@RequestBody User user) {
		Optional<User> editData = userService.updateUser(user);
		Message returnData = new Message("수정 성공", editData);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 삭제 - 김주원
	@DeleteMapping("/user")
	public ResponseEntity<Message> deleteUser(@RequestBody List<Long> idList) {
		boolean result = userService.deleteUserList(idList);
		Message returnData = new Message(Boolean.toString(result));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 회원정보 수정폼 - 이지홍
	@GetMapping("/profile")
	public Profile profile() {
		// 유저정보와 일치하는 유저데이터 받아오기
		Long userId = 1001L;
		Profile profile = userService.getUserProfile(userId);
		return profile;	
	}

	// 회원정보 수정 - 이지홍
	@PutMapping("/profile")
	public String putProfile(@RequestBody Profile profile) {
		// 첫번째 파라미터 userid로 바꾸기
		userService.updateProfile(1001l, profile);
		return "redirect:/profile";
	}

	// 비밀번호 수정 - 이지홍
	@PutMapping("/password")
	public String putPassword(@RequestBody Password password) {
		// 첫번째 파라미터 userid로 바꾸기
		userService.updatePassword(1001l, password);
		return "redirect:/profile";
	}
}
