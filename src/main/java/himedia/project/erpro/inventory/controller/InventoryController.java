package himedia.project.erpro.inventory.controller;

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
import himedia.project.erpro.inventory.dto.InventoryDto;
import himedia.project.erpro.inventory.service.InventoryService;
import lombok.RequiredArgsConstructor;

// 이지홍
@RestController
@RequiredArgsConstructor
public class InventoryController {
	private final InventoryService inventoryService;
	
	@GetMapping("/api/inventory")
	public ResponseEntity<Message> inventory() {
		List<InventoryDto> dataList = inventoryService.getInventoryAll();
		Message returnData = new Message("재고 목록 불러오기", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/inventory/{id}")
	public ResponseEntity<Message> detailInventory(@PathVariable(value="id") Long id) {
		InventoryDto data = inventoryService.getInventory(id);
		Message returnData = new Message("재고 상세 데이터", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/api/inventory")
	public ResponseEntity<Message> addInventory(@RequestBody InventoryDto inventoryDto){
		InventoryDto dataList = inventoryService.createInventory(inventoryDto);
		Message returnData = new Message("입/출고 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/api/inventory")
	public ResponseEntity<Message> editInventory(@RequestBody InventoryDto inventoryDto){
		InventoryDto data = inventoryService.updateInventory(inventoryDto);
		Message returnData = new Message("재고 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

//	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/inventory")
	public ResponseEntity<Message> deleteInventory(@RequestBody List<Long> idList){
		inventoryService.deleteInventoryList(idList);
		Message returnData = new Message("재고 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
