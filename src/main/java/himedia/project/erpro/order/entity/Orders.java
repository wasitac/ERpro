package himedia.project.erpro.order.entity;

import java.sql.Date;

import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.enums.OrdersType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "b_nm")
	private String bnm;
	
	@Column(name = "b_no")
	private String bno;
	
	@Column(name = "sort")
	private String sort;
	
	@Column(name = "due_date")
	private Date dueDate;
	
	@Column(name = "completion_date")
	private Date completionDate;
	
	public OrdersDto toDto() {
		return OrdersDto.builder()
				.id(this.id)
				.bnm(this.bnm)
				.bno(this.bno)
				.sort(this.sort)
				.dueDate(this.dueDate)
				.completionDate(this.completionDate)
				.build();
	}
}
