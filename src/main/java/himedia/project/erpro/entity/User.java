package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
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
