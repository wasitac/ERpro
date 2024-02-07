package himedia.project.erpro.order.entity;

import java.sql.Date;

import himedia.project.erpro.order.dto.EstimateDto;
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
public class Estimate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "account_id")
	private Long accountId;

	@Column(name = "insert_date")
	private Date insertDate;
	
	@Column(name = "due_date")
	private Date dueDate;

	@Column(name = "total")
	private Integer total;

	@Column(name = "is_order")
	private String isOrder;
	
	public EstimateDto toDto() {
		return EstimateDto.builder()
				.id(this.id)
				.accountId(this.accountId)
				.insertDate(this.insertDate)
				.dueDate(this.dueDate)
				.total(this.total)
				.isOrder(this.isOrder)
				.build();
	}
}
