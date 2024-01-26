package himedia.project.erpro.repository;

import himedia.project.erpro.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
	
	// 거래처 상세 조회
	public Optional<Account> findById(Long id);
	
	// 거래처 목록 
	public List<Account> findAll();
	
}
