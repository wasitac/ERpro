package himedia.project.erpro.order.dto;

import himedia.project.erpro.user.enums.OrderType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrdersDto {
	private Long id;
	private String bNm;
	private String bNo;
	private OrderType type;
	private String dueDate;
	private String completionDate;
}
