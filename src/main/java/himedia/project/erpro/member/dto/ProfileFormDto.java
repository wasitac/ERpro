package himedia.project.erpro.member.dto;

import himedia.project.erpro.trade.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileFormDto {
	private String name;
	private String phone;
	private String email;
}
