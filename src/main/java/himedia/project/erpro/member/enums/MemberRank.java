package himedia.project.erpro.member.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

//이지홍
@Getter
@RequiredArgsConstructor
public enum MemberRank {
	EMPLOYEE("사원"), 
	MANAGER("대리"), 
	DIRECTOR("과장"), 
	TEAM_LEADER("차장"), 
	EXECUTIVE("부장"), 
	CEO("사장");

	private final String kor;
	
	
}
