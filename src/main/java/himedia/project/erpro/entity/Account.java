package himedia.project.erpro.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;			// 거래처 코드
	
//	@Column(name = "user_id")
//	private Long userId;		// 담당자 id	user에서 id를 외래키로 참조
	
	@Column(name = "b_no")
	private String bNo;			// 사업자 등록 번호
	
	@Column(name = "b_nm")
	private String bNm;			// 거래처명
	private String sort;		// 구분 (개인, 법인)
	
	@Column(name = "p_nm")
	private String pNm;			// 대표명
	
	@Column(name = "b_sector")
	private String bSector;		// 업태
	
	@Column(name = "b_type")
	private String bType;		// 종목
	private String phone;		// 연락처
	
	@Column(name = "b_adr")
	private String bAdr;		// 거래처 주소
	private String email;		// 이메일
}