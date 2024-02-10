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
import himedia.project.erpro.inventory.dto.BomDetailDto;
import himedia.project.erpro.inventory.dto.BomDto;
import himedia.project.erpro.inventory.dto.ItemDto;
import himedia.project.erpro.inventory.service.BomService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BomController {

    private final BomService bomService;

    // Bom 목록 - 김주원
    @GetMapping("/api/bom")
    public ResponseEntity<Message> bom() {
        List<ItemDto> dataList = bomService.getBomListAll();
        Message returnData = new Message("", dataList);
        return new ResponseEntity<>(returnData, HttpStatus.OK);
    }

    // Bom 상세 조회 - 김주원
    @GetMapping("/api/bom/{itemId}")
    public ResponseEntity<Message> detailBom(@PathVariable(value="itemId") Long itemId) {
        BomDetailDto data = bomService.getBomByItemId(itemId);
        Message returnData = new Message("", data);
        return new ResponseEntity<>(returnData, HttpStatus.OK);
    }
    
    // Bom 추가 - 김주원
    @PostMapping("/api/bom")
    public ResponseEntity<Message> addBom(@RequestBody BomDetailDto bomDetailDto) {
    	Boolean result = bomService.createBom(bomDetailDto);
    	Message returnData = new Message("", result);
    	return new ResponseEntity<>(returnData, HttpStatus.OK);
    }
    
    // Bom 수정 - 김주원
    @PutMapping("/api/bom")
    public ResponseEntity<Message> editBom(@RequestBody BomDetailDto bomDetailDto) {
        Boolean result = bomService.updateBom(bomDetailDto);
		Message returnData = new Message("", result);
    	return new ResponseEntity<>(returnData, HttpStatus.OK);
    }
    
    // Bom 삭제 - 김주원
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/api/bom")
    public ResponseEntity<Message> deleteBom(@RequestBody List<Long> itemIdList) {
    	boolean result = bomService.deleteBomList(itemIdList);
    	Message returnData = new Message(Boolean.toString(result));
    	return new ResponseEntity<>(returnData, HttpStatus.OK);
    }
   
}
