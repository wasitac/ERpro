package himedia.project.erpro.inventory.dto;

import java.sql.Date;

import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.enums.StoreSort;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 이지홍
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreDto {

	private Long id;
	private String sort;
	private String bnm;
	private Long orderId;
	private Date storeDate;

	public Store toEntity() {
		return Store.builder().id(this.id).sort(StoreSort.fromKor(this.sort)).bnm(this.bnm).orderId(this.orderId)
				.storeDate(this.storeDate).build();
	}
}
