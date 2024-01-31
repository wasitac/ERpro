package himedia.project.erpro.member.dto;

import java.util.Date;

import himedia.project.erpro.member.enums.Department;
import himedia.project.erpro.member.enums.MemberRank;
import himedia.project.erpro.member.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {
	private Long id;
	private String name;
	private Date birth;	
	private String phone;
	private String email;
	private Department department;
	private MemberRank memberRank;
	private Role role;
	private String workType;
	private Date insertDate;
	private Date retireDate;
	private String password;
}
