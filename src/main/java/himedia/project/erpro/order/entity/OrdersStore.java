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
public class OrdersStore {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "b_nm")
	private String bNm;
	
	@Column(name = "p_nm")
	private String pNm;
	
	@Column(name = "b_no")
	private String bNo;

	@Column(name = "sort")
	@Enumerated(EnumType.STRING)
	private OrdersType sort;
	
	@Column(name = "user_id")
	private Long userId;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "b_adr")
	private String bAdr;
	
	@Column(name = "b_sector")
	private String bSector;
	
	@Column(name = "b_type")
	private String bType;
}
