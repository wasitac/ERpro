package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@GetMapping("/profile")
	public String profile() {
		
		return "회원정보 수정";
	}
	
	@PostMapping("/profile")
	public String editProfile() {
		
		return "회원정보 수정한다!";
	}
}
