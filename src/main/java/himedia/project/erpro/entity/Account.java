package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Account {
	private Long id;			// 거래처 코드
	private Long userId;		// 담당자 id			user에서 id를 외래키로 참조
	private String bNo;			// 사업자 등록 번호
	private String bNm;			// 거래처명
	private String sort;		// 구분 (개인, 법인)
	private String pNm;			// 대표명
	private String bSector;		// 업태
	private String bType;		// 종목
	private String phone;		// 연락처
	private String bAdr;		// 거래처 주소
	private String email;		// 이메일
}