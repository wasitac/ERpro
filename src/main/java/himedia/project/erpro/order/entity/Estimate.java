package himedia.project.erpro.order.entity;

import java.time.LocalDate;

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
public class Estimate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "account_id")
	private Long accountid;

	@Column(name = "insert_date")
	private LocalDate insertdate;
	
	@Column(name = "expiration_date")
	private String expirationdate;
	
	@Column(name = "due_date")
	private String duedate;

	@Column(name = "total")
	private Integer total;

	@Column(name = "is_order")
	private String isorder;
}
