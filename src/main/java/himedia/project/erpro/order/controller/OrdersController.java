package himedia.project.erpro.order.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	@GetMapping("/orders")
	public ResponseEntity<Message> orders() {
		List<OrdersDto> dataList = ordersService.getOrdersAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 상세 조회
	@GetMapping("/orders/{id}")
	public ResponseEntity<Message> detatilOrders(@PathVariable(value="id") Long id) {
		OrdersDto data = ordersService.getOrdersById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 거래처명이 일치하는 주문 조회 - 이지홍
	@GetMapping("/orders/bnm/{bNm}")
	public ResponseEntity<Message> detatilOrders(@PathVariable(value="bNm") String bNm) {
		List<Long> idList = ordersService.getIdsByBNm(bNm);
		Message returnData = new Message("거래처명이 일치하는 주문번호 목록", idList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 추가
	@PostMapping("/orders")
	public ResponseEntity<Message> addOrders(@RequestBody OrdersDto ordersDto) {
		OrdersDto dataSave = ordersService.createOrders(ordersDto);
		Message returnData = new Message("저장 성공", dataSave);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 수정
	@PutMapping("/orders")
	public ResponseEntity<Message> updateOrders(@RequestBody OrdersDto ordersDto) {
		OrdersDto dataUpdate = ordersService.updateOrders(ordersDto);
		Message returnData = new Message("수정 성공", dataUpdate);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 삭제
	@DeleteMapping("/orders")
	public ResponseEntity<Message> deleteOrders(@RequestBody List<Long> idList) {
		boolean dataDelete = ordersService.deleteOrdersList(idList);
		Message returnData = new Message(Boolean.toString(dataDelete));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 구매/판매 품목
	@GetMapping("/ordersItem")
	public ResponseEntity<Message> ordersItem() {
		Message returnData = new Message("ordersItem");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/ordersItem/{ordersId}")
	public ResponseEntity<Message> ordersItems(@PathVariable(value="ordersId") Long ordersId) {
		List<OrdersItemDto> dataList = ordersService.getOrdersItems(ordersId);
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/ordersItem/{ordersId}/{rowId}")
	public ResponseEntity<Message> ordersItemRow(@PathVariable(value="rowId") Long rowId) {
		OrdersItemDto data = ordersService.getOrdersItem(rowId);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/ordersItem")
	public ResponseEntity<Message> addOrdersItem(@RequestBody OrdersItemDto ordersItemDto) {
		OrdersItemDto dataList = ordersService.createOrdersItem(ordersItemDto);
		Message returnData = new Message("품목 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/ordersItem")
	public ResponseEntity<Message> updateOrdersItem(@RequestBody OrdersItemDto ordersItemDto) {
		OrdersItemDto data = ordersService.updateOrdersItem(ordersItemDto);
		Message returnData = new Message("품목 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@DeleteMapping("/ordersItem")
	public ResponseEntity<Message> deleteOrdersItem(@RequestBody List<Long> idList) {
		ordersService.deleteOrdersItemList(idList);
		Message returnData = new Message("품목 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
