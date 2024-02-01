package himedia.project.erpro.order.entity;

import java.util.Date;

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
	private Long accountId;

	@Column(name = "insert_date")
	private Date insertDate;
	
	@Column(name = "expiration_date")
	private Date expirationDate;
	
	@Column(name = "due_date")
	private Date dueDate;

	@Column(name = "total")
	private Integer total;

	@Column(name = "is_order")
	private String isOrder;
}
