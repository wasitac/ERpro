package himedia.project.erpro.member.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

// 이지홍
@Getter
@RequiredArgsConstructor
public enum Department {
	SALES("영업"),
	PRODUCTION("생산"),
	HR("인사"),
	LOGISTICS("물류"),
	ADMIN("관리");
	
	private final String kor;
}
