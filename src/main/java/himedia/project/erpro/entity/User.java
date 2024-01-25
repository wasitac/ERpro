package himedia.project.erpro.entity;

import himedia.project.erpro.enums.Department;
import himedia.project.erpro.enums.UserRank;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String birth;	
	private String phone;
	private String email;
	
	@Enumerated(EnumType.STRING)
	private Department department;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "user_rank")
	private UserRank userRank;
	@Column(name = "work_type")
	private String workType;
	@Column(name = "insert_date")
	private String insertDate;
	@Column(name = "retire_date")
	private String retireDate;
	private String password;
}
