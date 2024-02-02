package himedia.project.erpro.order.dto;

import himedia.project.erpro.order.entity.OrdersItem;
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
public class OrdersItemDto {
	private Long id;
	private Long ordersId;
	private String sort;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer vat;
	private Integer total;
	
	public OrdersItem toEntity() {
		return OrdersItem.builder()
				.id(this.id)
				.ordersId(this.ordersId)
				.sort(this.sort)
				.itemId(this.itemId)
				.itemName(this.itemName)
				.unit(this.unit)
				.spec(this.spec)
				.count(this.count)
				.price(this.price)
				.vat(this.vat)
				.total(this.total)
				.build();
	}
}
