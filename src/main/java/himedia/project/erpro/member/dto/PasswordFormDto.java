package himedia.project.erpro.member.dto;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PasswordFormDto {
	String password;
	String newPassword;
	
	public PasswordFormDto(String password, String newPassword) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		this.password = bCryptPasswordEncoder.encode(password);
		this.newPassword = bCryptPasswordEncoder.encode(newPassword);
	}
}
