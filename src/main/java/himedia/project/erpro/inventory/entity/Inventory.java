package himedia.project.erpro.inventory.entity;

import himedia.project.erpro.inventory.dto.InventoryDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
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
public class Inventory {
	
	@Id
	private Long id;

	@Column(name = "item_name")
	private String itemName;
	
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
	
	

	public InventoryDto toDto() {
        return InventoryDto.builder()
								.id(this.id)
								.itemName(this.itemName)
								.openingCount(this.openingCount)
								.openingAmount(this.openingAmount)
								.storeIn(this.storeIn)
								.storeOut(this.storeOut)
								.currentInventory(this.currentInventory)
								.appropriateInventory(this.appropriateInventory)
								.lack(this.lack)
								.build();
    }
}
