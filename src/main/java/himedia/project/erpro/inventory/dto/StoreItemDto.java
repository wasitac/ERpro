package himedia.project.erpro.inventory.dto;

import himedia.project.erpro.inventory.entity.StoreItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 이지홍
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreItemDto {
	private Long id;
	private Long itemId;
	private Long storeId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer vat;
	private Integer total;
	
	public StoreItem toEntity() {
		return StoreItem.builder()
				.id(this.id)
				.itemId(this.itemId)
				.storeId(this.storeId)
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
