package himedia.project.erpro.inventory.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreDto {
	private Long id;
	private Long accountId;
	private Long orderId;
	private String storeSort;
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
