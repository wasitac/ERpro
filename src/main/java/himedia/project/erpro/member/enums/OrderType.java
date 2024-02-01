package himedia.project.erpro.member.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

//이지홍
@Getter
@RequiredArgsConstructor
public enum OrderType {
	BUY("구매"),
	SELL("판매");
	
	private final String kor;
	}
