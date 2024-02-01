package himedia.project.erpro.order.dto;

import java.util.Date;

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
public class EstimateItemDto {
	private Long id;
	private Long estimateId;
	private Long itemId;
	private String itemName;
	private Date dueDate;
	private Integer spec;
	private Integer price;
	private Integer vat;
	private Integer total;
}
