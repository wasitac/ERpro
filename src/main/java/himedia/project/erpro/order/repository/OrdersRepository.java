package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.Orders;
import jakarta.transaction.Transactional;

public interface OrdersRepository extends JpaRepository<Orders, Long>{
	public List<Orders> findAll();
	public Optional<Orders> findById(Long id);
	
	@Transactional
	public int deleteAllByIdIn(List<Long> idList);
}