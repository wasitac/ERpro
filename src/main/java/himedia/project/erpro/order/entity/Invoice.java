package himedia.project.erpro.order.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
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
	private String dueDate;
	
	@Column(name = "date")
	private Date date;

}
