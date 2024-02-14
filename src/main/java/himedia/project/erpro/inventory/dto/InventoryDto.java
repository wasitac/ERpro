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
	private String itemName;	
	private Integer openingCount;
	private Integer openingAmount;
	private Integer storeIn;
	private Integer storeOut;
	private Integer currentInventory;
	private Integer appropriateInventory;
	private Integer lack;

	public Inventory toEntity() {
		return Inventory.builder()
						.id(this.id)
						.itemName(this.itemName)
						.openingCount(this.openingCount)
						.openingAmount(this.openingAmount)
						.storeIn(this.storeIn)
						.storeOut(this.storeOut)
						.currentInventory(this.currentInventory)
						.appropriateInventory(this.appropriateInventory)
						.lack(this.lack)
						.build();
}
}
