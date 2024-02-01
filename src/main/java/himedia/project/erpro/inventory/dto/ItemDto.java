package himedia.project.erpro.inventory.dto;

import himedia.project.erpro.inventory.entity.Item;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {

	private Long id;
	private String sort;
	private String itemName;
	private String unit;
	private String spec;
	private Integer buyPrice;
	private Integer sellPrice;

	public Item toEntity() {
		return Item.builder()
				.id(id)
				.sort(sort)
				.itemName(itemName)
				.unit(unit)
				.spec(spec)
				.buyPrice(buyPrice)
				.sellPrice(sellPrice)
				.build();
	}
}
