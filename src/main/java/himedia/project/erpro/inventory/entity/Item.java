package himedia.project.erpro.inventory.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String sort;

	@Column(name = "item_name")
	private String itemName;
	
	private String unit;
	private String spec;
	
	@Column(name = "buy_price")
	private Integer buyPrice;
	
	@Column(name = "sell_price")
	private Integer sellPrice;
}