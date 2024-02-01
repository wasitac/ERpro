package himedia.project.erpro.inventory.entity;

import java.util.Date;

import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.production.entity.Inspection;
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
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Store {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "store_sort")
	private String storeSort;

	@Column(name = "b_nm")
	private String bNm;

	@Column(name = "order_id")
	private Long orderId;

	@Column(name = "store_date")
	private Date storeDate;
	
	public StoreDto toDto() {
		return StoreDto.builder()
				.id(this.id)
				.storeSort(this.storeSort)
				.bNm(this.bNm)
				.orderId(this.orderId)
				.storeDate(this.storeDate)
				.build();
	}
}
