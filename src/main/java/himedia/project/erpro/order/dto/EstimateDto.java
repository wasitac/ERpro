package himedia.project.erpro.order.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EstimateDto {
	private Long id;
	private Long accountid;
	private LocalDate insertdate;
	private String expirationdate;
	private String duedate;
	private Integer total;
	private String isorder;
}
