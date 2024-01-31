package himedia.project.erpro.order.dto;

import java.time.LocalDate;

import himedia.project.erpro.member.enums.SortType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceDto {
	private Long id;
	private Long storeid;
	private SortType sort;
	private String payment;
	private String note;
	private LocalDate date;
}
