package himedia.project.erpro.trade.entity;


import himedia.project.erpro.member.enums.OrderType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long accountId;
	private Long itemId;
	private Long memberId;
	
	@Enumerated(EnumType.STRING)
	private OrderType orderType;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	
	@Column(name = "supply_price")
	private Integer supplyPrice;
	private Integer vat;
	private Integer total;
	
	@Column(name = "due_date")
	private String dueDate;
	
	@Column(name = "completion_date")
	private String completionDate;
}
