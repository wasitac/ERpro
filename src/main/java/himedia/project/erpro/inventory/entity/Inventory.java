package himedia.project.erpro.inventory.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Inventory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "item_id")
	private Long itemId;
	
	@Column(name = "store_id")
	private Long storeId;
	
	@Column(name = "opening_count")
	private Integer openingCount;
	
	@Column(name = "opening_amount")
	private Integer openingAmount;
	
	@Column(name = "store_in")
	private Integer storeIn;
	
	@Column(name = "store_out")
	private Integer storeOut;
	
	@Column(name = "current_inventory")
	private Integer currentInventory;
	
	@Column(name = "appropriate_inventory")
	private Integer appropriateInventory;
	
	private Integer lack;
	
	private Integer sales;
	
	@Column(name = "expected_order")
	private String expectedOrder;
}
