package himedia.project.erpro.entity;

import himedia.project.erpro.enums.OrderType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long accountId;
	private Long itemId;
	private Long userId;
	private OrderType orderType;
	private String unit;
	private String spec;
	private Integer count;
	private Integer price;
	private Integer supplyPrice;
	private Integer vat;
	private Integer total;
	private String dueDate;
	private String completionDate;
}
