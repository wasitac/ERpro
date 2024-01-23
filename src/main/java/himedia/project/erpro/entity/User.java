package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
	long id;
	String name;
	String password;
	String birth;
	String phone;
	String email;
	String department;
	String position;
	String work_type;
	String insert_date;
	String retire_date;
}
