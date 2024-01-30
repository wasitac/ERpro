package himedia.project.erpro.inventory.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.inventory.dto.InventoryDto;
import himedia.project.erpro.inventory.service.InventoryService;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
public class InventoryController {
	private final InventoryService inventoryService;

	
	@GetMapping("/inventory")
	public ResponseEntity<Message> inventory() {
		List<InventoryDto> dataList = inventoryService.getInventoryAll();
		Message returnData = new Message("재고 목록 불러오기", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
}
