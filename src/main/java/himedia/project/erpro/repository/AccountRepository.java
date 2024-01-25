package himedia.project.erpro.repository;

import himedia.project.erpro.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
  
  public Optional<Account> findById(Long id);
  
  public List<Account> findAll();
}
