package himedia.project.erpro.inventory.dto;

import himedia.project.erpro.inventory.entity.Inventory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 이지홍
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InventoryDto {
	private Long id;
	private Long itemId;
	private Long storeId;
	private Integer openingCount;
	private Integer openingAmount;
	private Integer storeIn;
	private Integer storeOut;
	private Integer currentInventory;
	private Integer appropriateInventory;
	private Integer lack;
	private Integer sales;
	private String expectedOrder;

	public Inventory toEntity() {
		return Inventory.builder()
						.id(this.id)
						.itemId(this.itemId)
						.storeId(this.storeId)
						.openingCount(this.openingCount)
						.openingAmount(this.openingAmount)
						.storeIn(this.storeIn)
						.storeOut(this.storeOut)
						.currentInventory(this.currentInventory)
						.appropriateInventory(this.appropriateInventory)
						.lack(this.lack)
						.sales(this.sales)
						.expectedOrder(this.expectedOrder)
						.build();
}
}
