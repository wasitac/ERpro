package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.dto.Password;
import himedia.project.erpro.dto.Profile;
import himedia.project.erpro.entity.User;

@RestController
public class UserController {

	// 메인페이지
	@GetMapping("/home")
	public String home() {
		return "데이타";
	}
	
	// 사원 대장 - 김주원
	@GetMapping("/user")
	public String user() {
		return "사원 대장";
	}
	
	// 사원 추가 - 김주원
	@PostMapping("/user")
	public String addUser(@RequestBody User user) {
		System.out.println("사번 : " + user.getId());
		System.out.println("비밀번호 : " + user.getPassword());
		System.out.println("이름 : " + user.getName());
		System.out.println("생년월일 : " + user.getBirth());
		System.out.println("연락처 : " + user.getPhone());
		System.out.println("이메일 : " + user.getEmail());
		System.out.println("부서 : " + user.getDepartment());
		System.out.println("직책 : " + user.getPosition());
		System.out.println("입사일 : " + user.getInsert_date());
		return "사원 추가";
	}
	
	// 사원 수정 - 김주원
	@PutMapping("/user")
	public String editUser(@RequestBody User user) {
		System.out.println("이메일 : " + user.getEmail());
		System.out.println("직책 : " + user.getPosition());
		System.out.println("연락처 : " + user.getPhone());
		return "사원 정보 수정";
	}
	
	// 사원 삭제 - 김주원
	@DeleteMapping("/user")
	public String deleteUser(@RequestParam(name="id") long id) {
		System.out.println("사번 : " + id);
		return "사원 삭제";
	}
	
	// 회원정보 수정폼 - 이지홍
	@GetMapping("/profile")
	public Profile profile() {
		Profile profile = new Profile("이미자", "111111", "1969-04-23", "010-8888-7777", "mija@gmail.com", "영업", "부장",
				"2010-10-23");
		return profile;
	}

	// 회원정보 수정 - 이지홍
	@PutMapping("/profile")
	public String editProfile(@RequestBody Profile profile) {
		System.out.println(profile.getName());
		System.out.println(profile.getId());

		return "redirect:/profile";
	}

	// 비밀번호 수정 - 이지홍
	@PutMapping("/password")
	public String editProfile(@RequestBody Password password) {

		return "redirect:/profile";
	}
}
