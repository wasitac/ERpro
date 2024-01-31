package himedia.project.erpro.member.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SortType {
		SALES("매출"),
		PURCHASE("매입");
		
		private final String kor;
}
