package himedia.project.erpro.production.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.production.dto.ProductionDto;
import himedia.project.erpro.production.service.ProductionService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProductionController {
	private final ProductionService productionService;
	
	@GetMapping("/production")
	public ResponseEntity<Message> production() {
		List<ProductionDto> dataList = productionService.getProductionAll();
		Message returnData = new Message("생산지시 목록", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/production/{id}")
	public ResponseEntity<Message> detailProduction(@PathVariable(value="id") Long id) {
		ProductionDto data = productionService.getProduction(id);
		Message returnData = new Message("생산지시 상세", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/production")
	public ResponseEntity<Message> addProduction(@RequestBody ProductionDto productionDto){
		ProductionDto dataList = productionService.createProduction();
		Message returnData = new Message("생산지시 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/production")
	public ResponseEntity<Message> editProduction(@RequestBody ProductionDto productionDto){
		ProductionDto message = productionService.updateProduction(productionDto);
		Message returnData = new Message(message);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@DeleteMapping("/production")
	public ResponseEntity<Message> deleteProduction(@RequestBody List<Long> idList){
		boolean result = accountService.deleteProduction(idList);
		Message returnData = new Message("", result);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
