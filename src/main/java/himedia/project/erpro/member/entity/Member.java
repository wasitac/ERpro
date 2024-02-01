package himedia.project.erpro.member.entity;

import java.util.Date;

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
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
//@AllArgsConstructor(access = AccessLevel.PRIVATE)
//@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
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
	
	@Column(name = "insert_date")
	private Date insertDate;
	
	@Column(name = "retire_date")
	private Date retireDate;
	
	private String password;
}
