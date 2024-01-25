package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {
	long id;
	String sort;
	String itemName;
	String unit;
	String spec;
	int purchasePrice;
	int salesPrice;
}