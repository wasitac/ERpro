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
    private String bno;			// 사업자 등록 번호
    private String bnm;			// 거래처명
    private String sort;		// 구분 (매입, 매출)
    private String pnm;			// 대표명
    private String bsector;		// 업태
    private String btype;		// 종목
    private String phone;		// 연락처
    private String badr;		// 거래처 주소
    private String email;		// 이메일

    public Account toEntity() {
        return Account.builder()
                .id(this.id)
                .memberName(this.memberName)
                .bno(this.bno)
                .bnm(this.bnm)
                .sort(this.sort)
                .pnm(this.pnm)
                .bsector(this.bsector)
                .btype(this.btype)
                .phone(this.phone)
                .badr(this.badr)
                .email(this.email)
                .build();
    }
}
