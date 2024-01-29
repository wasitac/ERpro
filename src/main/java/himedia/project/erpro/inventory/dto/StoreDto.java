package himedia.project.erpro.inventory.dto;

import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StoreDto {
	private Long id;
	private Long accountId;
	private Long orderId;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer supplyPrice;
	private Integer vat;
	private Integer total;
	private LocalDate storeDate;
}
