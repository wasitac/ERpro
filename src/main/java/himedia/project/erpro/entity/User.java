package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

//@Entity
@Getter
@Setter
public class User {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	String name;
	String birth;
	String phone;
	String email;
	String department;
	String position;
	String work_type;
	String insertDate;
	String retireDate;
	String password;
}
