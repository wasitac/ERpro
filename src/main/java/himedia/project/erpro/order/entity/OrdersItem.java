package himedia.project.erpro.order.entity;

import himedia.project.erpro.order.dto.OrdersItemDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class OrdersItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "orders_Id")
	private Long ordersId;
	
	@Column(name = "item_id")
	private Long itemId;
	
	@Column(name = "item_name")
	private String itemName;
	
	@Column(name = "unit")
	private String unit;
	
	@Column(name = "spec")
	private String spec;
	
	@Column(name = "count")
	private Integer count;
	
	@Column(name = "price")
	private Integer price;
	
	@Column(name = "vat")
	private Integer vat;
	
	@Column(name = "total")
	private Integer total;
	
	public OrdersItemDto toDto() {
		return OrdersItemDto.builder()
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
