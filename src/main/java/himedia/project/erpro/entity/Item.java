package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {
	private Long id;
	private String sort;
	private String itemName;
	private String unit;
	private String spec;
	private Integer purchasePrice;
	private Integer salesPrice;
}