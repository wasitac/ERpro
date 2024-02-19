package himedia.project.erpro;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
	@GetMapping(value = {"/", "/login","/findpassword", "/profile"})
	public String forward() {
		return "forward:/index.html";
	}

}
