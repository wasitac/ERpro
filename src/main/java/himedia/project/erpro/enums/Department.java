package himedia.project.erpro.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Department {
	 SALES("영업"),
	 PRODUCTION("생산"),
	 HR("인사"),
	 LOGISTICS("물류"),
	 EXECUTIVE("사장");
	
	private final String kor;
}
