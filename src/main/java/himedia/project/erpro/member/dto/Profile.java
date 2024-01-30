package himedia.project.erpro.member.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Profile {
	private String name;
	private String id;
	private LocalDate birth;
	private String phone;
	private String email;
	private String department;
	private String memberRank;
	private LocalDate insertDate;
	
}
