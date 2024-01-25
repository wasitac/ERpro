package himedia.project.erpro.entity;

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
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;			// 거래처 코드
	long user_id;		// 담당자 id			user에서 id를 외래키로 참조
	String b_no;		// 사업자 등록 번호
	String b_nm;		// 거래처명
	String sort;		// 구분 (개인, 법인)
	String p_nm;		// 대표명
	String b_sector;	// 업태
	String b_type;		// 종목
	String phone;		// 연락처
	String b_adr;		// 거래처 주소
	String email;		// 이메일
}