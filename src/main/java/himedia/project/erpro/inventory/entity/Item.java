package himedia.project.erpro.inventory.entity;

import himedia.project.erpro.inventory.dto.ItemDto;
import himedia.project.erpro.trade.entity.Account;
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

	 public ItemDto toDto() {
        return ItemDto.builder()
						.id(this.id)
						.sort(this.sort)
						.itemName(this.itemName)
						.unit(this.unit)
						.spec(this.spec)
						.buyPrice(this.buyPrice)
						.sellPrice(this.sellPrice)
            .build();
    }
}