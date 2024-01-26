package himedia.project.erpro.service;

import himedia.project.erpro.entity.Account;
import himedia.project.erpro.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {
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
  
}
