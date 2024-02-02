package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.OrdersItem;

public interface OrdersItemRepository extends JpaRepository<OrdersItem, Long> {
	public List<OrdersItem> findAll();
	public List<OrdersItem> findAllByOrdersId(Long ordersId);
	public Optional<OrdersItem> findById(Long id);
}
