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
  
  public Optional<Account> getAccountById(Long id) {
    Optional<Account> account = accountRepository.findById(id);
    return account;
  }
  
  public List<Account> getAccountAll() {
    List<Account> accountList = accountRepository.findAll();
    return accountList;
  }
  
}
