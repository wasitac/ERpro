package himedia.project.erpro.inventory.dto;


import himedia.project.erpro.common.DateFormat;
import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.enums.StoreSort;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreDto {
	
	private Long id;
	private String sort;
	private String bNm;
	private Long orderId;
	private String storeDate;
	
	public Store toEntity() {
		DateFormat dateFormat = new DateFormat();
		return Store.builder()
				.id(this.id)
				.sort(StoreSort.fromKor(this.sort))
				.bNm(this.bNm)
				.orderId(this.orderId)
				.storeDate(dateFormat.toDate(this.storeDate))
				.build();
	}
	
}
