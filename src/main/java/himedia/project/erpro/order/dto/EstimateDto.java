package himedia.project.erpro.order.dto;

import java.util.Date;

import himedia.project.erpro.order.entity.Estimate;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EstimateDto {
	private Long id;
	private Long accountId;
	private Date insertDate;
	private Date expirationDate;
	private Date dueDate;
	private Integer total;
	private String isOrder;
	
	public Estimate toEntity() {
		return Estimate.builder()
				.id(this.id)
				.accountId(this.accountId)
				.insertDate(this.insertDate)
				.expirationDate(this.expirationDate)
				.dueDate(this.dueDate)
				.total(this.total)
				.isOrder(this.isOrder)
				.build();
	}
}
