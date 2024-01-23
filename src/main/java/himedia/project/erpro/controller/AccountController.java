package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
	
	@GetMapping("/account")
	public String account() {
		return "거래처 목록";
	}
	
	@PostMapping("/account")
	public String addAccount() {
		return "거래처 추가";
	}
	
	@PutMapping("/account")
	public String editAccount() {
		return "거래처 수정";
	}
	
	@DeleteMapping("/account")
	public String deleteAccount() {
		return "거래처 삭제";
	}
}
