package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import himedia.project.erpro.order.repository.OrdersRepository;
import himedia.project.erpro.trade.entity.Orders;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrdersService {
	private final OrdersRepository ordersRepository;
	
	public List<Orders> getOrderAll() {
		List<Orders> ordersList = ordersRepository.findAll();
		return ordersList;
	}
	
	public Optional<Orders> getOrdersById(Long id){
		Optional<Orders> orders = ordersRepository.findById(id);
		return orders;
	}
}
