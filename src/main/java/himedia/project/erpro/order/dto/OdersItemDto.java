package himedia.project.erpro.order.dto;

import himedia.project.erpro.member.enums.OrdersType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OdersItemDto {
	private Long id;
	private Long ordersId;
	private OrdersType sort;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer vat;
	private Integer total;
}
