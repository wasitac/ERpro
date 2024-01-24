package himedia.project.erpro.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.entity.Account;

@RestController
public class AccountController {
	
	// 거래처 목록 - 김주원
	@GetMapping("/account")
	// public ResponseEntity<Map<String, List<Account>>> account() {
	public ResponseEntity<Message> account() {
	      
		// 리턴용 샘플 데이터
		List<Account> dataList = new ArrayList<>();
		Account sample = new Account();
		sample.setId(1);
		sample.setB_nm("000");
		dataList.add(sample);
  
		// Map<String, List<Account>> returnData = new HashMap<>();
		// returnData.put("data", dataList);
		Message returnData = new Message("", dataList);
      
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 추가 - 김주원
	@PostMapping("/account")
	public String addAccount(@RequestBody Account account) {
		System.out.println("거래처id : " + account.getId());
		System.out.println("사업자 등록 번호 : " + account.getB_no());
		System.out.println("거래처명 : " + account.getB_nm());
		System.out.println("사업자 구분 : " + account.getSort());
		System.out.println("대표자 : " + account.getP_nm());
		System.out.println("업태 : " + account.getB_sector());
		System.out.println("종목 : " + account.getB_type());
		return "거래처 등록";
	}
	
	// 거래처 수정 - 김주원
	@PutMapping("/account")
	public String editAccount(@RequestBody Account account) {
		System.out.println("거래처id : " + account.getId());
		System.out.println("사업자 등록 번호 : " + account.getB_no());
		System.out.println("거래처명 : " + account.getB_nm());
		System.out.println("종목 : " + account.getB_type());
		return "거래처 정보 수정";
	}
	
	// 거래처 삭제 - 김주원
	@DeleteMapping("/account")
	public String deleteAccount(@RequestParam(name = "id") long id) {
	   System.out.println("거래처 id: " + id);
	   return "거래처 삭제";
	}
}
