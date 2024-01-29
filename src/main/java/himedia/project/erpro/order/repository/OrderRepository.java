package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	public List<Order> findAll();
	public Optional<Order> getOrderFindById(Long id);
}
