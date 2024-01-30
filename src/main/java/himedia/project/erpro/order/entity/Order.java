package himedia.project.erpro.order.entity;

import himedia.project.erpro.user.enums.OrderType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="type")
	@Enumerated(EnumType.STRING)
	private OrderType type;
	
	@Column(name="account_id")
	private Long accountId;
	
	@Column(name="item_id")
	private Long itemId;
	
	@Column(name="item_name")
	private String itemName;
	
	@Column(name="unit")
	private String unit;
	
	@Column(name="spec")
	private String spec;
	
	@Column(name="count")
	private Integer count;
	
	@Column(name="price")
	private Integer price;
	
	@Column(name="supplyPrice")
	private Integer supplyPrice;
	
	@Column(name="vat")
	private Integer vat;
	
	@Column(name="total")
	private Integer total;
	
	@Column(name="due_date")
	private String dueDate;
	
	@Column(name="completion_date")
	private String completionDate;
	
	@Column(name="expiration")
	private String expiration;
}
