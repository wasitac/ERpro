package himedia.project.erpro.inventory.dto;

import java.util.Date;

import himedia.project.erpro.inventory.entity.Store;
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
	private Date storeDate;
	
	public Store toEntity() {
		return Store.builder()
				.id(this.id)
				.sort(this.sort)
				.bNm(this.bNm)
				.orderId(this.orderId)
				.storeDate(this.storeDate)
				.build();
	}
	
}
