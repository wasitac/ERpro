package himedia.project.erpro.inventory.controller;

import java.util.List;
import java.util.Optional;

import himedia.project.erpro.inventory.dto.ItemDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.inventory.entity.Item;
import himedia.project.erpro.inventory.service.ItemService;
import himedia.project.erpro.trade.entity.Account;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ItemController {
	
	private final ItemService itemService;
	
	// 물품 목록 - 김주원
	@GetMapping("/item")
	public ResponseEntity<Message> item() {
		List<ItemDto> dataList = itemService.getItemAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	// 물품 상세데이터 조회 - 김주원
	@GetMapping("/item/{id}")
	public ResponseEntity<Message> detailItem(@PathVariable(value="id") Long id) {
		ItemDto data = itemService.getItemById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 물품 추가 - 김주원
	@PostMapping("/item")
	public ResponseEntity<Message> additem(@RequestBody ItemDto itemDto) {
		ItemDto data = itemService.createItem(itemDto);
		Message returnData = new Message("저장 성공", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 물품 수정 - 김주원
	@PutMapping("/item")
	public ResponseEntity<Message> editItem(@RequestBody ItemDto itemDto) {
		ItemDto editData = itemService.updateItem(itemDto);
		Message returnData = new Message("수정 성공", editData);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 물품 삭제 - 김주원
	@DeleteMapping("/item")
	public ResponseEntity<Message> deleteItem(@RequestBody List<Long> idList) {
		boolean result = itemService.deleteItemList(idList);
		Message returnData = new Message(Boolean.toString(result));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
