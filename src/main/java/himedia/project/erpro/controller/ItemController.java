package himedia.project.erpro.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.entity.Item;

@RestController
public class ItemController {
	
	// 물품 목록 - 김주원
	@GetMapping("/item")
	public String item() {
		return "물품 목록";
	}
	
	// 물품 추가 - 김주원
	@PostMapping("/item")
	public String additem(@RequestBody Item item) {
		System.out.println("물품id : " + item.getId());
		System.out.println("분류 : " + item.getSort());
		System.out.println("품목명 : " + item.getItemName());
		System.out.println("단위 : " + item.getUnit());
		System.out.println("규격 : " + item.getSpec());		
		System.out.println("매입단가 : " + item.getPurchasePrice());		
		System.out.println("매출 단가 : " + item.getSalesPrice());		
		return "물품 등록";
	}
	
	// 물품 수정 - 김주원
	@PutMapping("/item")
	public String editItem(@RequestBody Item item) {
		System.out.println("물품id : " + item.getId());
		System.out.println("품목명 : " + item.getItemName());
		System.out.println("매입단가 : " + item.getPurchasePrice());		
		System.out.println("매출 단가 : " + item.getSalesPrice());		
		return "물품 정보 수정";
	}
	
	// 물품 삭제 - 김주원
	@DeleteMapping("/item")
	public String deleteItem(@RequestParam(name = "id") long id) {
	   System.out.println("거래처 id: " + id);
	   return "물품 삭제";
	}
}
