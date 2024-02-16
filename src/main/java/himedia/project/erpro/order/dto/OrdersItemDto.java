package himedia.project.erpro.order.dto;

import himedia.project.erpro.order.entity.OrdersItem;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "orders_item")
public class OrdersItemDto {
	private Long id;
	private Long ordersId;
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
