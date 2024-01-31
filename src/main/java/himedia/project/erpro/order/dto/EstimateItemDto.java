package himedia.project.erpro.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EstimateItemDto {
	private Long id;
	private Long estimateid;
	private Long itemid;
	private String itemname;
	private Integer duedate;
	private Integer spec;
	private Integer price;
	private Integer vat;
	private Integer total;
}
