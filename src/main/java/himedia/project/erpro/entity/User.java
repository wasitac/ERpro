package himedia.project.erpro.entity;

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
	private Long id;
	private String name;
	private String birth;
	private String phone;
	private String email;
	private String department;
	private String rank;
	private String work_type;
	private String insertDate;
	private String retireDate;
	private String password;
}
