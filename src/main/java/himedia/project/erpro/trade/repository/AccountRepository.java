package himedia.project.erpro.trade.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.trade.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
	
	// 거래처 상세 조회.trade
	public Optional<Account> findById(Long id);
	
	// 거래처 목록 
	public List<Account> findAll();

	// 거래처 목록 삭제
	public int deleteAllByIdIn(List<Long> idList);
}
