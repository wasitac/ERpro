package himedia.project.erpro.order.entity;

import java.util.Date;

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
	private String bNm;
	
	@Column(name = "b_no")
	private String bNo;
	
	@Column(name = "sort")
	private String sort;
	
	@Column(name = "due_date")
	private Date dueDate;
	
	@Column(name = "completion_date")
	private Date completionDate;
	
	public OrdersDto toOrdersDto() {
		return OrdersDto.builder()
				.id(this.id)
				.bNm(this.bNm)
				.bNo(this.bNo)
				.sort(this.sort)
				.dueDate(this.dueDate)
				.completionDate(this.completionDate)
				.build();
	}
}
