package himedia.project.erpro.production.dto;

import java.util.Date;

import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.production.entity.Production;
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
public class ProductionDto {
	private Long id;
	private String accountName;
	private Long orderId;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private String memberName;
	private Date productionDate;

	public Production toEntity() {
		return Production.builder()
						.id(this.id)
						.accountName(this.accountName)
						.orderId(this.orderId)
						.itemId(this.itemId)
						.itemName(this.itemName)
						.unit(this.unit)
						.spec(this.spec)
						.count(this.count)
						.memberName(this.memberName)
						.productionDate(this.productionDate)
						.build();
}
}
