package himedia.project.erpro.order.dto;

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
public class OrdersDto {
	private Long id;
	private String bNm;
	private String bNo;
	private String type;
	private String dueDate;
	private String completionDate;
}
