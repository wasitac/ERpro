package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import himedia.project.erpro.order.entity.Orders;
import jakarta.transaction.Transactional;

public interface OrdersRepository extends JpaRepository<Orders, Long>{
	public List<Orders> findAll();
	public Optional<Orders> findById(Long id);
	
	@Query(value = "SELECT * FROM orders WHERE b_nm = :bnm", nativeQuery = true)
	List<Orders> findAllByBnm(@Param("bnm") String bnm);
	
	@Transactional
	public int deleteAllByIdIn(List<Long> idList);
}
