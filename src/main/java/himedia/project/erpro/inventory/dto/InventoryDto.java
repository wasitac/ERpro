package himedia.project.erpro.inventory.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
}
