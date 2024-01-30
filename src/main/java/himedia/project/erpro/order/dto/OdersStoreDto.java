package himedia.project.erpro.order.dto;

import himedia.project.erpro.member.enums.OrdersType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OdersStoreDto {
	private Long id;
	private String bNm;
	private String bNo;
	private OrdersType sort;
	private Long userId;
	private String phone;
	private String email;
	private String bAdr;
	private String bSector;
	private String bType;
}
