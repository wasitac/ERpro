package himedia.project.erpro.member.entity;

import java.sql.Date;

import himedia.project.erpro.member.dto.MemberDto;
import himedia.project.erpro.member.dto.ProfileFormDto;
import himedia.project.erpro.member.enums.Department;
import himedia.project.erpro.member.enums.MemberRank;
import himedia.project.erpro.member.enums.Role;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
	@Column(name = "birth_date")
	private Date birthDate;	
	
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

//	public MemberDto toDto() {
//		return MemberDto.builder()
//				.id(this.id)
//				.name(this.name)
//				.birthDate(this.birthDate)
//				.phone(this.phone)
//				.email(this.email)
//				.department(this.department.getKor())
//				.memberRank(this.memberRank.getKor())
//				.role(this.role.getKor())
//				.workType(this.workType)
//				.insertDate(this.insertDate)
//				.retireDate(this.retireDate)
//				.password(this.password)
//				.build();
//	}

	public MemberDto toDto() {
		return MemberDto.builder()
				.id(this.id)
				.name(this.name)
				.birthDate(this.birthDate)
				.phone(this.phone)
				.email(this.email)
				.department(this.department.getKor())
				.memberRank(this.memberRank.getKor())
				.role(this.role.getKor())
				.workType(this.workType)
				.insertDate(this.insertDate)
				.retireDate(this.retireDate)
				.password(this.password)
				.build();
	}

	public MemberDto toFormDto() {
		return MemberDto.builder()
				.id(id)
				.name(name)
				.birthDate(birthDate)
				.phone(phone)
				.email(email)
				.department(department.toString())
				.memberRank(memberRank.toString())
				.role(role.toString())
				.workType(workType)
				.insertDate(insertDate)
				.retireDate(retireDate)
				.password(password)
				.build();
	}

	public MemberDto toJwtDto() {
		return MemberDto.builder()
				.id(id)
				.name(name)
				.email(email)
				.department(department.getKor())
				.memberRank(memberRank.getKor())
				.role(role.toString())
				.insertDate(insertDate)
				.retireDate(retireDate)
				.password(password)
				.build();
	}

	// 이지홍
	public Member updateProfile(ProfileFormDto profile) {
		return Member.builder()
				.id(this.id)
				.name(profile.getName())
				.birthDate(this.birthDate)
				.phone(profile.getPhone())
				.email(profile.getEmail())
				.department(this.department)
				.memberRank(this.memberRank)
				.role(this.role)
				.workType(this.workType)
				.insertDate(this.insertDate)
				.retireDate(this.retireDate)
				.password(this.password)
				.build();
	}
	
	// 이지홍
	public Member updatePassword(String password) {
		return Member.builder()
				.id(this.id)
				.name(this.name)
				.birthDate(this.birthDate)
				.phone(this.phone)
				.email(this.email)
				.department(this.department)
				.memberRank(this.memberRank)
				.role(this.role)
				.workType(this.workType)
				.insertDate(this.insertDate)
				.retireDate(this.retireDate)
				.password(password)
				.build();
	}
	
}
