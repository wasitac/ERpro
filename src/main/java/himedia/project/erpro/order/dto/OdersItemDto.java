package himedia.project.erpro.order.dto;

import himedia.project.erpro.order.enums.OrdersType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
