package himedia.project.erpro.order.entity;

import java.util.Date;

import himedia.project.erpro.order.dto.InvoiceDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Invoice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "store_id")
	private Long storeId;
	
	@Column(name = "sort")
	private String sort;

	@Column(name = "payment")
	private String payment;
	
	@Column(name = "note")
	private String note;
	
	@Column(name = "invoice_date")
	private Date invoiceDate;
	
	public InvoiceDto toInvoiceDto() {
		return InvoiceDto.builder()
				.id(this.id)
				.storeId(this.storeId)
				.sort(this.sort)
				.payment(this.payment)
				.note(this.note)
				.invoiceDate(this.invoiceDate)
				.build();
	}

}
