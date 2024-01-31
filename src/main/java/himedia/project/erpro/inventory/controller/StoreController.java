package himedia.project.erpro.inventory.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.dto.StoreItemDto;
import himedia.project.erpro.inventory.service.StoreService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class StoreController {
	private final StoreService storeService;

	@GetMapping("/store")
	public ResponseEntity<Message> inventory() {
		List<StoreDto> dataList = storeService.getStoreAll();
		List<StoreItemDto> itemList = storeService.getStoreItemAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
