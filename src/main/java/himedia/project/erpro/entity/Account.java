package himedia.project.erpro.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Account {
	long id;			// 거래처 코드
	long userId;		// 담당자 id			user에서 id를 외래키로 참조
	String bNo;			// 사업자 등록 번호
	String bNm;			// 거래처명
	String sort;		// 구분 (개인, 법인)
	String pNm;			// 대표명
	String bSector;		// 업태
	String bType;		// 종목
	String phone;		// 연락처
	String bAdr;		// 거래처 주소
	String email;		// 이메일
}