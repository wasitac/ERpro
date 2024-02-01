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
public class InvoiceDto {
	private Long id;
	private Long storeId;
	private String sort;
	private String payment;
	private String note;
	private Date date;
}
