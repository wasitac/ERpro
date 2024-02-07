package himedia.project.erpro.trade.entity;

import himedia.project.erpro.trade.dto.AccountDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // 거래처 코드

	@Column(name = "member_name")
	private String memberName; // 담당자 id member에서 id를 외래키로 참조

	@Column(name = "b_no")
	private String bno; // 사업자 등록 번호

	@Column(name = "b_nm")
	private String bnm; // 거래처명
	private String sort; // 구분 (매입, 매출)

	@Column(name = "p_nm")
	private String pnm; // 대표명

	@Column(name = "b_sector")
	private String bsector; // 업태

	@Column(name = "b_type")
	private String btype; // 종목
	private String phone; // 연락처

	@Column(name = "b_adr")
	private String badr; // 거래처 주소
	private String email; // 이메일

	public AccountDto toDto() {
		return AccountDto.builder().id(this.id).memberName(this.memberName).bno(this.bno).bnm(this.bnm).sort(this.sort)
				.pnm(this.pnm).bsector(this.bsector).btype(this.btype).phone(this.phone).badr(this.badr)
				.email(this.email).build();
	}
}