package himedia.project.erpro.trade.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.trade.dto.AccountDto;
import himedia.project.erpro.trade.service.AccountService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AccountController {
	private final AccountService accountService;
	
	// 거래처 목록 - 김주원
	@GetMapping("/account")
	public ResponseEntity<Message> account() {
		List<AccountDto> dataList = accountService.getAccountAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 상세데이터 조회 - 김주원
	@GetMapping("/account/{id}")
	public ResponseEntity<Message> detailAccount(@PathVariable(value="id") Long id) {
		AccountDto data = accountService.getAccountById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 추가 - 김주원
	@PostMapping("/account")
	public ResponseEntity<Message> addAccount(@RequestBody AccountDto accountDto) {
		AccountDto data = accountService.createAccount(accountDto);
		Message returnData = new Message("저장 성공", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 수정 - 김주원
	@PutMapping("/account")
	public ResponseEntity<Message> editAccount(@RequestBody AccountDto accountDto) {
		AccountDto editData = accountService.updateAccount(accountDto);
		Message returnData = new Message("수정 성공", editData);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처 삭제 - 김주원
	@DeleteMapping("/account")
	public ResponseEntity<Message> deleteAccount(@RequestBody List<Long> idList) {
		boolean result = accountService.deleteAcoountList(idList);
		Message returnData = new Message(Boolean.toString(result));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
