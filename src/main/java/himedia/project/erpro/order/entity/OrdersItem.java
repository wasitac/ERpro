package himedia.project.erpro.order.entity;

import himedia.project.erpro.member.enums.OrdersType;
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
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class OrdersItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private Long ordersId;
	
	@Column
	private OrdersType sort;
	
	@Column
	private Long itemId;
	
	@Column
	private String itemName;
	
	@Column
	private String unit;
	
	@Column
	private String spec;
	
	@Column
	private Integer count;
	
	@Column
	private Integer price;
	
	@Column
	private Integer vat;
	
	@Column
	private Integer total;
}
