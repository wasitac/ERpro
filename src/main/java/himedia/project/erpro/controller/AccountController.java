package himedia.project.erpro.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.entity.Account;
import himedia.project.erpro.service.AccountService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AccountController {
	private final AccountService accountService;
	
	// 거래처 목록 - 김주원
	@GetMapping("/account")
	public ResponseEntity<Message> account() {
		List<Account> dataList = accountService.getAccountAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 상세데이터 조회 - 김주원
	@GetMapping("/account/{id}")
	public ResponseEntity<Message> detailAccount(@PathVariable(value="id") Long id) {
		Optional<Account> data = accountService.getAccountById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 추가 - 김주원
	@PostMapping("/account")
	public String addAccount(@RequestBody Account account) {
		System.out.println("거래처id : " + account.getId());
		System.out.println("사업자 등록 번호 : " + account.getBNo());
		System.out.println("거래처명 : " + account.getBNm());
		System.out.println("사업자 구분 : " + account.getSort());
		System.out.println("대표자 : " + account.getPNm());
		System.out.println("업태 : " + account.getBSector());
		System.out.println("종목 : " + account.getBType());
		return "거래처 등록";
	}
	
	// 거래처 수정 - 김주원
	@PutMapping("/account")
	public String editAccount(@RequestBody Account account) {
		System.out.println("거래처id : " + account.getId());
		System.out.println("사업자 등록 번호 : " + account.getBNo());
		System.out.println("거래처명 : " + account.getBNm());
		System.out.println("종목 : " + account.getBType());
		return "거래처 정보 수정";
	}
	
	// 거래처 삭제 - 김주원
	@DeleteMapping("/account")
	public String deleteAccount(@RequestParam(name = "id") long id) {
	   System.out.println("거래처 id: " + id);
	   return "거래처 삭제";
	}
}
