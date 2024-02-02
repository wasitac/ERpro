package himedia.project.erpro.member.entity;

import java.util.Date;

import himedia.project.erpro.member.dto.MemberDto;
import himedia.project.erpro.member.enums.Department;
import himedia.project.erpro.member.enums.MemberRank;
import himedia.project.erpro.member.enums.Role;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;

	@Temporal(TemporalType.DATE)
	private Date birth;	
	
	private String phone;
	
	private String email;
	
	@Enumerated(EnumType.STRING)
	private Department department;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "member_rank")
	private MemberRank memberRank;

	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name = "work_type")
	private String workType;

	@Temporal(TemporalType.DATE)
	@Column(name = "insert_date")
	private Date insertDate;

	@Temporal(TemporalType.DATE)
	@Column(name = "retire_date")
	private Date retireDate;
	
	private String password;

	public MemberDto toDto() {
		return MemberDto.builder()
				.id(id)
				.name(name)
				.birth(birth)
				.phone(phone)
				.email(email)
				.department(department.getKor())
				.memberRank(memberRank.getKor())
				.role(role.getKor())
				.workType(workType)
				.insertDate(insertDate)
				.retireDate(retireDate)
				.password(password)
				.build();
	}
}
