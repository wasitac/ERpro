package himedia.project.erpro.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
	@GetMapping(value = {"/", "/login","/findpassword", "/profile", "/error"})
	public String forwart() {
		return "forward:/index.html";
	}
}
