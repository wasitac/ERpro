package himedia.project.erpro.production.controller;

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
import himedia.project.erpro.production.dto.ProductionDto;
import himedia.project.erpro.production.service.ProductionService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProductionController {
	private final ProductionService productionService;
	
	@GetMapping("/api/production")
	public ResponseEntity<Message> production() {
		List<ProductionDto> dataList = productionService.getProductionAll();
		Message returnData = new Message("생산지시 목록", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/production/{id}")
	public ResponseEntity<Message> detailProduction(@PathVariable(value="id") Long id) {
		ProductionDto data = productionService.getProduction(id);
		Message returnData = new Message("생산지시 상세", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/api/production")
	public ResponseEntity<Message> addProduction(@RequestBody ProductionDto productionDto){
		ProductionDto dataList = productionService.createProduction(productionDto);
		Message returnData = new Message("생산지시 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/api/production")
	public ResponseEntity<Message> editProduction(@RequestBody ProductionDto productionDto){
		ProductionDto data = productionService.updateProduction(productionDto);
		Message returnData = new Message("생산지시 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/production")
	public ResponseEntity<Message> deleteProduction(@RequestBody List<Long> idList){
		productionService.deleteProductionList(idList);
		Message returnData = new Message("생산지시 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
