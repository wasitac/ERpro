package himedia.project.erpro.order.dto;

import himedia.project.erpro.member.enums.OrdersType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrdersDto {
	private Long id;
	private String bNm;
	private String bNo;
	private OrdersType type;
	private String dueDate;
	private String completionDate;
}
