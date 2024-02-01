package himedia.project.erpro.order.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SortType {
		SALES("매출"),
		PURCHASE("매입");
		
		private final String kor;
}
