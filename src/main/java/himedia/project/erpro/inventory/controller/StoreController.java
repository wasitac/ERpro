package himedia.project.erpro.inventory.controller;

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
import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.dto.StoreItemDto;
import himedia.project.erpro.inventory.service.StoreService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class StoreController {
	private final StoreService storeService;

	@GetMapping("/store")
	public ResponseEntity<Message> store() {
		List<StoreDto> dataList = storeService.getStoreAll();
		Message returnData = new Message("입/출고 목록", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/store/{id}")
	public ResponseEntity<Message> detailStore(@PathVariable(value="id") Long id) {
		StoreDto data = storeService.getStore(id);
		Message returnData = new Message("입/출고 상세 데이터", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/store")
	public ResponseEntity<Message> addStore(@RequestBody StoreDto storeDto){
		StoreDto dataList = storeService.createStore(storeDto);
		Message returnData = new Message("입/출고 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/store")
	public ResponseEntity<Message> editStore(@RequestBody StoreDto storeDto){
		StoreDto data = storeService.updateStore(storeDto);
		Message returnData = new Message("입/출고 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@DeleteMapping("/store")
	public ResponseEntity<Message> deleteStore(@RequestBody List<Long> idList){
		storeService.deleteStoreList(idList);
		Message returnData = new Message("입/출고 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	
	// 출고 품목 상세
	@GetMapping("/storeItem")
	public ResponseEntity<Message> storeItem() {
		Message returnData = new Message("storeItem");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 입출고 품목 상세
	@GetMapping("/storeItem/{storeId}")
	public ResponseEntity<Message> storeItems(@PathVariable(value="storeId") Long storeId) {
		List<StoreItemDto> dataList = storeService.getStoreItems(storeId);
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/storeItem/{storeId}/{rowId}")
	public ResponseEntity<Message> storeItem(@PathVariable(value="rowId") Long rowId) {
		StoreItemDto data = storeService.getStoreItem(rowId);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/storeItem")
	public ResponseEntity<Message> addStoreItem(@RequestBody StoreItemDto storeItemDto){
		StoreItemDto dataList = storeService.createStoreItem(storeItemDto);
		Message returnData = new Message("입/출고 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/storeItem")
	public ResponseEntity<Message> editStoreItem(@RequestBody StoreItemDto storeItemDto){
		StoreItemDto data = storeService.updateStoreItem(storeItemDto);
		Message returnData = new Message("입/출고 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@DeleteMapping("/storeItem")
	public ResponseEntity<Message> deleteStoreItem(@RequestBody List<Long> idList){
		storeService.deleteStoreItemList(idList);
		Message returnData = new Message("입/출고 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}