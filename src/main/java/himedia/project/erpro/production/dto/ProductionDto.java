package himedia.project.erpro.production.dto;

import java.util.Date;

import himedia.project.erpro.production.entity.Production;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductionDto {
	private Long id; // 지시 번호
	private Long accountName;
	private Long orderId;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private String memberName; // 담당자명
	private Date productionDate;

	public Production toEntity() {
		return Production.builder()
						.id(this.id)
						.orderId(this.orderId)
						.accountId(this.accountId)
						.memberId(this.memberId)
						.itemId(this.itemId)
						.itemName(this.itemName)
						.unit(this.unit)
						.spec(this.spec)
						.count(this.count)
						.productionDate(this.productionDate)
						.build();
}
}
