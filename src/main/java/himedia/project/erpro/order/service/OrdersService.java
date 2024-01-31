package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.entity.Orders;
import himedia.project.erpro.order.repository.OrdersRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrdersService {
	private final OrdersRepository ordersRepository;
	private final CustomMapper mapper;
	
	public List<OrdersDto> getOrdersAll() {
		List<Orders> ordersList = ordersRepository.findAll();
		List<OrdersDto> ordersDtoList = mapper.toDtoList(ordersList, OrdersDto.class);
		return ordersDtoList;
	}
	
//	public Optional<OrdersDto> getOrdersById(Long id){
//		Optional<Orders> ordersId = ordersRepository.findById(id);
//		Optional<OrdersDto> ordersDtoId = mapper.toDto(ordersId, OrdersDto.class);
//		return ordersDtoId;
//	}
}
