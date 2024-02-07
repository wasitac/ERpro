package himedia.project.erpro.order.dto;

import java.sql.Date;

import himedia.project.erpro.order.entity.Orders;
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
public class OrdersDto {
	private Long id;
	private String bnm;
	private String bno;
	private String sort;
	private Date dueDate;
	private Date completionDate;
	
	public Orders toEntity() {
		return Orders.builder()
				.id(this.id)
				.bnm(this.bnm)
				.bno(this.bno)
				.sort(this.sort)
				.dueDate(this.dueDate)
				.completionDate(this.completionDate)
				.build();
	}
}
