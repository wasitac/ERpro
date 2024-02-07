package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.dto.OrdersItemDto;
import himedia.project.erpro.order.entity.Orders;
import himedia.project.erpro.order.entity.OrdersItem;
import himedia.project.erpro.order.repository.OrdersItemRepository;
import himedia.project.erpro.order.repository.OrdersRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrdersService {
	private final OrdersRepository ordersRepository;
	private final OrdersItemRepository ordersItemRepository;
	private final CustomMapper mapper;
	
	// 구매/판매 주문서 리스트
	public List<OrdersDto> getOrdersAll() {
		List<Orders> ordersList = ordersRepository.findAll();
		List<OrdersDto> ordersDtoList = mapper.toDtoList(ordersList, OrdersDto.class);
		return ordersDtoList;
	}
	
	// 구매/판매 주문서 상세 조회
	public OrdersDto getOrdersById(Long id){
		Orders ordersId = ordersRepository.findById(id)
				.orElseThrow(()-> new EntityNotFoundException("Orders not found with ordersID : " + id));
		OrdersDto ordersDtoId = mapper.map(ordersId, OrdersDto.class);
		return ordersDtoId;
	}

	// 구매/판매 주문서 상세 조회 - 이지홍
	public List<Long> getIdsByBnm(String name){
		List<Long> idList = ordersRepository.findIdsByBnm(name);
		return idList;
	}
	
	// 구매/판매 주문서 등록
	public OrdersDto createOrders(OrdersDto ordersDto) {
		// dto를 엔티티로 변환
		Orders orders = mapper.map(ordersDto, Orders.class);
		Orders ordersSave = ordersRepository.save(orders);
		OrdersDto ordersDtoSave = mapper.map(ordersSave, OrdersDto.class);
		return ordersDtoSave;
	}
	
	// 구매/판매 주문서 수정
	public OrdersDto updateOrders(OrdersDto ordersDto) {
		Orders orders = ordersDto.toEntity();
		Optional<Orders> existOrders = ordersRepository.findById(orders.getId());
		
		if(existOrders.isPresent()) {
			Orders ordersUpt = ordersRepository.save(orders);
			return ordersUpt.toDto();
		} else {
			return null;
		}
	}
	
	// 구매/판매 주문서 삭제
	public boolean deleteOrdersList(List<Long> idList) {
		int deletedOrders = ordersRepository.deleteAllByIdIn(idList);
		if(deletedOrders > 0 && deletedOrders == idList.size()) {
			return true;
		} else {
			return false;
		}
	}
	
	// 구매/판매 주문서 품목 파트
	
	public List<OrdersItemDto> getOrdersItems(Long ordersId) {
		List<OrdersItem> ordersItemList = ordersItemRepository.findAllByOrdersId(ordersId);
		List<OrdersItemDto> ordersItemDtoList = mapper.toDtoList(ordersItemList, OrdersItemDto.class);
		return ordersItemDtoList;
	}
	
	public OrdersItemDto getOrdersItem(Long id) {
		OrdersItemDto ordersItemDto = ordersItemRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("OrdersItem not found with ID : " + id))
				.toDto();
		return ordersItemDto;
	}
	
	public OrdersItemDto createOrdersItem(OrdersItemDto ordersItemDto) {
		OrdersItemDto saveOrdersItemDto = Optional.ofNullable(ordersItemRepository.save(ordersItemDto.toEntity()))
						.orElseThrow(() -> new RuntimeException("Orders save failed"))
						.toDto();
		return saveOrdersItemDto;
	}
	
	public OrdersItemDto updateOrdersItem(OrdersItemDto ordersItemDto) {
		Optional<OrdersItem> ordersItemUpt = ordersItemRepository.findById(ordersItemDto.getId());
		
		if(ordersItemUpt.isEmpty()) {
			throw new EntityNotFoundException("OrdersItem not found with ID : " + ordersItemDto.getId());		
		}
		
		OrdersItemDto saveOrdersItemDto = ordersItemRepository.save(ordersItemDto.toEntity()).toDto();
		return saveOrdersItemDto;
	}
	
	public void deleteOrdersItemList(List<Long> idList) {
		ordersItemRepository.deleteAllById(idList);
	}
}
