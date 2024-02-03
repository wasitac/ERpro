package himedia.project.erpro.order.dto;

import himedia.project.erpro.order.entity.EstimateItem;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "estimate_item")
public class EstimateItemDto {
	private Long id;
	private Long estimateId;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer vat;
	private Integer total;
	
	public EstimateItem toEntity() {
		return EstimateItem.builder()
				.id(this.id)
				.estimateId(this.estimateId)
				.itemId(this.itemId)
				.itemName(this.itemName)
				.unit(this.unit)
				.spec(this.spec)
				.count(this.count)
				.price(this.price)
				.vat(this.vat)
				.total(this.total)
				.build();
	}
}
