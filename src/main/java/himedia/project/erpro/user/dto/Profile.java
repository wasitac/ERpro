package himedia.project.erpro.user.dto;

import java.time.LocalDate;

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
	LocalDate birth;
	String phone;
	String email;
	String department;
	String userRank;
	LocalDate insertDate;
}
