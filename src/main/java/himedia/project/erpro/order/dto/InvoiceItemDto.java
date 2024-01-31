package himedia.project.erpro.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceItemDto {
	private Long id;
	private Long invoiceid;
	private Long itemid;
	private String itemname;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer vat;
	private Integer total;
}
