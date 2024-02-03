package himedia.project.erpro.order.dto;

import java.sql.Date;

import himedia.project.erpro.order.entity.Invoice;
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
	private Date invoiceDate;
	
	public Invoice toEntity() {
		return Invoice.builder()
				.id(this.id)
				.storeId(this.storeId)
				.sort(this.sort)
				.payment(this.payment)
				.note(this.note)
				.invoiceDate(this.invoiceDate)
				.build();
	}
}
