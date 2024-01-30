package himedia.project.erpro.production.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InspectionDto {
	private Long id;
	private Long storeId;
	private String proposerName;
	private String inspectorName;
	private Long itemId;
	private String itemName;
	private Integer unit;
	private Integer spec;
	private Integer count;
	private Integer eligible;
	private Integer ineligible;
	private String pass;
	private String inspectionDate;
}
