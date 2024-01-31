package himedia.project.erpro.order.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class InvoiceItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "invoice_id")
	private Long invoiceid;
	
	@Column(name = "item_id")
	private Long itemid;

	@Column(name = "item_name")
	private String itemname;
	
	@Column(name = "unit")
	private String unit;
	
	@Column(name = "spec")
	private String spec;
	
	@Column(name = "count")
	private Integer count;
	
	@Column(name = "price")
	private Integer price;
	
	@Column(name = "vat")
	private Integer vat;
	
	@Column(name = "total")
	private Integer total;
}
