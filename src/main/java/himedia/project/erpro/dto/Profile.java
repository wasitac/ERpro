package himedia.project.erpro.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Profile {
	String name;
	String id;
	String birth;
	String phone;
	String email;
	String department;
	String position;
	String insertDate;
}
