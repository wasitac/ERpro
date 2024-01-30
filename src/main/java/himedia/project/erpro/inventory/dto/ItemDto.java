package himedia.project.erpro.inventory.dto;

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
}
