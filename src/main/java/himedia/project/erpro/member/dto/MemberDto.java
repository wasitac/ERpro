package himedia.project.erpro.member.dto;

import java.sql.Date;

import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.enums.Department;
import himedia.project.erpro.member.enums.MemberRank;
import himedia.project.erpro.member.enums.Role;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDto {
	private Long id;
	private String name;
	private Date birthDate;
	private String phone;
	private String email;
	private String department;
	private String memberRank;
	private String role;
	private String workType;
	private Date insertDate;
	private Date retireDate;
	private String password;

	public Member toEntity() {
		return Member.builder()
				.id(id)
				.name(name)
				.birthDate(birthDate)
				.phone(phone)
				.email(email)
				.department(Department.valueOf(department))
				.memberRank(MemberRank.valueOf(memberRank))
				.role(Role.valueOf(role))
				.workType(workType)
				.insertDate(insertDate)
				.retireDate(retireDate)
				.password(password)
				.build();
	}
}
