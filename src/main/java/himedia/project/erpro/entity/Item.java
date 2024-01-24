package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {
	long id;
	String sort;
	String item_name;
	String unit;
	String spec;
	int purchase_price;
	int sales_price;
}