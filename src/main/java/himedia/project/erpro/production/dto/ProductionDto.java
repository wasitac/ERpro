package himedia.project.erpro.production.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductionDto {
	private Long id; // 지시 번호
	private Long accountName;
	private Long orderId;
	private Long itemId;
	private String itemName;
	private String unit;
	private String spec;
	private Integer count;
	private String memberName; // 담당자명
	private LocalDate productionDate;
}
