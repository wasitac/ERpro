package himedia.project.erpro.inventory.entity;

import java.sql.Date;

import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.enums.StoreSort;
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
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Store {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "sort")
	private StoreSort sort;

	@Column(name = "b_nm")
	private String bnm;

	@Column(name = "order_id")
	private Long orderId;

	@Column(name = "store_date")
	private Date storeDate;
	
	public StoreDto toDto() {
		return StoreDto.builder()
				.id(this.id)
				.sort((this.sort).getKor())
				.bnm(this.bnm)
				.orderId(this.orderId)
				.storeDate(this.storeDate)
				.build();
	}
}
