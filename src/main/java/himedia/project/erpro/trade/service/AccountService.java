package himedia.project.erpro.trade.service;

import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import himedia.project.erpro.trade.entity.Account;
import himedia.project.erpro.trade.repository.AccountRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {
	
	@Autowired
	private final AccountRepository accountRepository;
  
	// 거래처 상세 조회
	public Optional<Account> getAccountById(Long id) {
		Optional<Account> account = accountRepository.findById(id);
	    return account;
	}
	  
	// 거래처 목록
	public List<Account> getAccountAll() {
		List<Account> accountList = accountRepository.findAll();
		return accountList;
	}
  
	// 거래처 추가
	public Account createAccount(Account account) {
		accountRepository.save(account);
		return account;
	}
  
	// 거래처 수정
	public Optional<Account> updateAccount(Account account) {
		Optional<Account> existAccount = accountRepository.findById(account.getId());
		
		if(existAccount.isPresent()) {
			Account updateAccount = existAccount.get();

			// 모든 필드를 업데이트
			BeanUtils.copyProperties(account, updateAccount);

			accountRepository.save(updateAccount);
			return Optional.of(updateAccount);
		} else {
			return Optional.empty();
		}
	}
	
	// 거래처 삭제
	public List<Account> deleteAccount(Long id) {
		Optional<Account> existAccount = accountRepository.findById(id); 
		if(existAccount.isPresent()) {
			accountRepository.deleteById(id);
			return accountRepository.findAll();
		} else {
			 throw new EntityNotFoundException("존재하지 않는 아이디 입니다.");
		}
	}

	// 거래처 다중 삭제
	public boolean deleteAcoountList(List<Long> idList) {
		int deletedCount = accountRepository.deleteAllByIdIn(idList);
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}

}
