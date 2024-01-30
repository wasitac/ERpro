package himedia.project.erpro.order.dto;

import himedia.project.erpro.user.enums.OrderType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDto {
	private Long id;
	private Long accountId;
	private Long itemId;
	private Long userId;
	private OrderType type;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer supplyPrice;
	private Integer vat;
	private Integer total;
	private String dueDate;
	private String completionDate;
}
