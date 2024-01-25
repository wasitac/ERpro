package himedia.project.erpro.entity;

import himedia.project.erpro.enums.Department;
import himedia.project.erpro.enums.UserRank;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String birth;
	private String phone;
	private String email;
	private Department department;
	private UserRank userRank;
	private String workType;
	private String insertDate;
	private String retireDate;
	private String password;
}
