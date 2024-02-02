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
public class EstimateDto {
	private Long id;
	private Long accountId;
	private Date insertDate;
	private Date expirationDate;
	private Date dueDate;
	private Integer total;
	private String isOrder;
}
