package himedia.project.erpro.trade.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import himedia.project.erpro.trade.dto.AccountDto;
import jakarta.transaction.Transactional;
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
	  
	// 거래처 목록
	public List<AccountDto> getAccountAll() {
		List<Account> accountList = accountRepository.findAll();

		List<AccountDto> accountDtoList = accountList.stream()
				.map(Account::toAccountDto)
				.collect(Collectors.toList());

		return accountDtoList;
	}

	// 거래처 상세 조회
	public AccountDto getAccountById(Long id) {
		Account account = accountRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Account not found with ID: " + id));

		AccountDto accountDto = account.toAccountDto();

		return accountDto;
	}
  
	// 거래처 추가
	public AccountDto createAccount(AccountDto accountDto) {
		Account account = accountDto.toEntity();
		Account saveAccount = accountRepository.save(account);

		return saveAccount.toAccountDto();
	}
  
	// 거래처 수정
	public AccountDto updateAccount(AccountDto accountDto) {
		Account account = accountDto.toEntity();

		Optional<Account> existAccount = accountRepository.findById(account.getId());
		
		if(existAccount.isPresent()) {
			Account updateAccount = accountRepository.save(account);
			return updateAccount.toAccountDto();
		} else {
			return null;
		}
	}

	// 거래처 다중 삭제
	public boolean deleteAcountList(List<Long> idList) {
		int deletedCount = accountRepository.deleteAllByIdIn(idList);
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}

}
