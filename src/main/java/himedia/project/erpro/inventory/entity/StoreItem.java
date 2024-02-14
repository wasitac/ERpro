package himedia.project.erpro.inventory.entity;

import himedia.project.erpro.inventory.dto.StoreItemDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "store_item")
public class StoreItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "item_id")
	private Long itemId;

	@Column(name = "store_id")
	private Long storeId;

	@Column(name = "item_name")
	private String itemName;

	private String unit;

	private String spec;

	private Integer count;

	private Integer price;

	private Integer vat;

	private Integer total;

		public StoreItemDto toDto() {
		return StoreItemDto.builder()
				.id(this.id)
				.itemId(this.itemId)
				.storeId(this.storeId)
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
