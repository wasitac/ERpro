package himedia.project.erpro.production.entity;

import java.time.LocalDate;

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

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Production {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "order_id")
	private Long orderId;

	@Column(name = "account_id")
	private Long accountId;

	@Column(name = "member_id")
	private Long memberId;

	@Column(name = "item_id")
	private Long itemId;

	@Column(name = "item_name")
	private String itemName;

	private String unit;
	
	private String spec;

	@Column(name = "count")
	private Integer count;
	
	@Column(name = "production_date")
	private LocalDate productionDate;
}
