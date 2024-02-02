package himedia.project.erpro.order.dto;

import java.util.Date;

import himedia.project.erpro.order.entity.Orders;
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
	private String bNm;
	private String bNo;
	private String type;
	private Date dueDate;
	private Date completionDate;
	
	public Orders toEntity() {
		return Orders.builder()
				.id(this.id)
				.bNm(this.bNm)
				.bNo(this.bNo)
				.type(this.type)
				.dueDate(this.dueDate)
				.completionDate(this.completionDate)
				.build();
	}
}
