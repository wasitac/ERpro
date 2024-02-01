package himedia.project.erpro.inventory.dto;

import himedia.project.erpro.inventory.entity.Item;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
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
				.id(this.id)
				.sort(this.sort)
				.itemName(this.itemName)
				.unit(this.unit)
				.spec(this.spec)
				.buyPrice(this.buyPrice)
				.sellPrice(this.sellPrice)
				.build();
	}
}
