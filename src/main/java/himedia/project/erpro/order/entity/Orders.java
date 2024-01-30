package himedia.project.erpro.order.entity;

import himedia.project.erpro.member.enums.OrdersType;
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

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long accountId;
	private Long itemId;
	private Long memberId;
	
	@Column(name="b_nm")
	private String bNm;	

	@Column(name="b_no")
	private String bNo;	
	
	@Column(name="sort")
	@Enumerated(EnumType.STRING)
	private OrdersType type;
	
	@Column(name="due_date")
	private String dueDate;
	
	@Column(name="completion_date")
	private String completionDate;
}
