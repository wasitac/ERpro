package himedia.project.erpro.user.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	// 메인페이지 - 이지홍
	@GetMapping("/data/{menu}")
	public String home(@PathVariable(value="menu") String menu) {
		// menu로 테이블 찾아서 반환하기
		return menu + "테이블";
	}
}
