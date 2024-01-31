package himedia.project.erpro.trade.dto;

import himedia.project.erpro.trade.entity.Account;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountDto {

    private Long id;			// 거래처 코드
    private String memberName;	// 담당자 이름
    private String bNo;			// 사업자 등록 번호
    private String bNm;			// 거래처명
    private String sort;		// 구분 (매입, 매출)
    private String pNm;			// 대표명
    private String bSector;		// 업태
    private String bType;		// 종목
    private String phone;		// 연락처
    private String bAdr;		// 거래처 주소
    private String email;		// 이메일

    public Account toEntity() {
        return Account.builder()
                .id(this.id)
                .memberName(this.memberName)
                .bNo(this.bNo)
                .bNm(this.bNm)
                .sort(this.sort)
                .pNm(this.pNm)
                .bSector(this.bSector)
                .bType(this.bType)
                .phone(this.phone)
                .bAdr(this.bAdr)
                .email(this.email)
                .build();
    }
}
