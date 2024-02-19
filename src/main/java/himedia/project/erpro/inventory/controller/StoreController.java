
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
import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.dto.StoreItemDto;
import himedia.project.erpro.inventory.service.StoreService;
import lombok.RequiredArgsConstructor;

// 이지홍
@RestController
@RequiredArgsConstructor
public class StoreController {
	private final StoreService storeService;

	@GetMapping("/api/store")
	public ResponseEntity<Message<List<StoreDto>>> store() {
		List<StoreDto> dataList = storeService.getStoreAll();
		Message<List<StoreDto>> returnData = new Message<>("입/출고 목록", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/store/{id}")
	public ResponseEntity<Message<StoreDto>> detailStore(@PathVariable(value="id") Long id) {
		StoreDto data = storeService.getStore(id);
		Message<StoreDto> returnData = new Message<>("입/출고 상세", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/api/store")
	public ResponseEntity<Message<StoreDto>> addStore(@RequestBody StoreDto storeDto){
		StoreDto dataList = storeService.createStore(storeDto);
		Message<StoreDto> returnData = new Message<>("입/출고 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/api/store")
	public ResponseEntity<Message<StoreDto>> editStore(@RequestBody StoreDto storeDto){
		StoreDto data = storeService.updateStore(storeDto);
		Message<StoreDto> returnData = new Message<>("입/출고 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

//	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/store")
	public ResponseEntity<Message<String>> deleteStore(@RequestBody List<Long> idList){
		storeService.deleteStoreList(idList);
		Message<String> returnData = new Message<>("입/출고 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/storeItem")
	public ResponseEntity<Message<String>> storeItem() {
		Message<String> returnData = new Message<>("storeItem");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/storeItem/{storeId}")
	public ResponseEntity<Message<List<StoreItemDto>>> storeItems(@PathVariable(value="storeId") Long storeId) {
		List<StoreItemDto> dataList = storeService.getStoreItems(storeId);
		Message<List<StoreItemDto>> returnData = new Message<>("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/storeItem/{storeId}/{itemId}")
	public ResponseEntity<Message<StoreItemDto>> storeItem(@PathVariable(value="itemId") Long itemId) {
		StoreItemDto data = storeService.getStoreItem(itemId);
		Message<StoreItemDto> returnData = new Message<>("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/api/storeItem")
	public ResponseEntity<Message<StoreItemDto>> addStoreItem(@RequestBody StoreItemDto storeItemDto){
		StoreItemDto dataList = storeService.createStoreItem(storeItemDto);
		Message<StoreItemDto> returnData = new Message<>("입/출고 품목 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/api/storeItem")
	public ResponseEntity<Message<StoreItemDto>> editStoreItem(@RequestBody StoreItemDto storeItemDto){
		StoreItemDto data = storeService.updateStoreItem(storeItemDto);
		Message<StoreItemDto> returnData = new Message<>("입/출고 품목 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

//	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/storeItem")
	public ResponseEntity<Message<String>> deleteStoreItem(@RequestBody List<Long> idList){
		storeService.deleteStoreItemList(idList);
		Message<String> returnData = new Message<>("입/출고 품목 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}