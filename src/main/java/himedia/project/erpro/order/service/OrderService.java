package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import himedia.project.erpro.order.entity.Order;
import himedia.project.erpro.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {
	private final OrderRepository orderRepository;
	
	public List<Order> getOrderAll() {
		List<Order> orderList = orderRepository.findAll();
		return orderList;
	}
	
	public Optional<Order> getOrderById(Long id){
		Optional<Order> order = orderRepository.findById(id);
		return order;
	}
}
