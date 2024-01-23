package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@GetMapping("/profile")
	public String profile() {
		
		return "회원정보 수정";
	}
	
	@PutMapping("/profile")
	//타입수정해야함
	public String editProfile(@RequestBody String data) {
		System.out.println(data);
		return "회원정보 수정한다!";
	}
}
