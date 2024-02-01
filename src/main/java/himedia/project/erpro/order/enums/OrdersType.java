package himedia.project.erpro.order.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

//이지홍
@Getter
@RequiredArgsConstructor
public enum OrdersType {
	BUY("구매"),
	SELL("판매");
	
	private final String kor;
}
