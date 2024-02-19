package himedia.project.erpro.order.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.dto.OrdersItemDto;
import himedia.project.erpro.order.service.OrdersService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class OrdersController {
	private final OrdersService ordersService;
	
	// 구매/판매 목록
	@GetMapping("/api/orders")
	public ResponseEntity<Message<List<OrdersDto>>> orders() {
		List<OrdersDto> dataList = ordersService.getOrdersAll();
		Message<List<OrdersDto>> returnData = new Message<>("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 상세 조회
	@GetMapping("/api/orders/{id}")
	public ResponseEntity<Message<OrdersDto>> detatilOrders(@PathVariable(value="id") Long id) {
		OrdersDto data = ordersService.getOrdersById(id);
		Message<OrdersDto> returnData = new Message<>("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처명이 일치하는 주문 조회 - 이지홍
	@GetMapping("/api/orders/bnm/{bnm}")
	public ResponseEntity<Message<List<OrdersDto>>> detatilOrders(@PathVariable(value="bnm") String bnm) {
		List<OrdersDto> ordersList = ordersService.getOrdersByBnm(bnm);
		Message<List<OrdersDto>> returnData = new Message<>("거래처명이 일치하는 주문번호 목록", ordersList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 추가
	@PostMapping("/api/orders")
	public ResponseEntity<Message<OrdersDto>> addOrders(@RequestBody OrdersDto ordersDto) {
		OrdersDto dataSave = ordersService.createOrders(ordersDto);
		Message<OrdersDto> returnData = new Message<>("저장 성공", dataSave);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 수정
	@PutMapping("/api/orders")
	public ResponseEntity<Message<OrdersDto>> updateOrders(@RequestBody OrdersDto ordersDto) {
		OrdersDto dataUpdate = ordersService.updateOrders(ordersDto);
		Message<OrdersDto> returnData = new Message<>("수정 성공", dataUpdate);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 삭제
//	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/orders")
	public ResponseEntity<Message<String>> deleteOrders(@RequestBody List<Long> idList) {
		ordersService.deleteOrdersList(idList);
		Message<String> returnData = new Message<>("구매/판매 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 품목
	@GetMapping("/api/ordersItem")
	public ResponseEntity<Message<String>> ordersItem() {
		Message<String> returnData = new Message<>("ordersItem");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/ordersItem/{ordersId}")
	public ResponseEntity<Message<List<OrdersItemDto>>> ordersItems(@PathVariable(value="ordersId") Long ordersId) {
		List<OrdersItemDto> dataList = ordersService.getOrdersItems(ordersId);
		Message<List<OrdersItemDto>> returnData = new Message<>("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/ordersItem/{ordersId}/{rowId}")
	public ResponseEntity<Message<OrdersItemDto>> ordersItemRow(@PathVariable(value="rowId") Long rowId) {
		OrdersItemDto data = ordersService.getOrdersItem(rowId);
		Message<OrdersItemDto> returnData = new Message<>("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/api/ordersItem")
	public ResponseEntity<Message<OrdersItemDto>> addOrdersItem(@RequestBody OrdersItemDto ordersItemDto) {
		OrdersItemDto dataList = ordersService.createOrdersItem(ordersItemDto);
		Message<OrdersItemDto> returnData = new Message<>("구매/판매 품목 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/api/ordersItem")
	public ResponseEntity<Message<OrdersItemDto>> updateOrdersItem(@RequestBody OrdersItemDto ordersItemDto) {
		OrdersItemDto data = ordersService.updateOrdersItem(ordersItemDto);
		Message<OrdersItemDto> returnData = new Message<>("구매/판매 품목 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

//	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/ordersItem")
	public ResponseEntity<Message<String>> deleteOrdersItem(@RequestBody List<Long> idList) {
		ordersService.deleteOrdersItemList(idList);
		Message<String> returnData = new Message<>("구매/판매 품목 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
