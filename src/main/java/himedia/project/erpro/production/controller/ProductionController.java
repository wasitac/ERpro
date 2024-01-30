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
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
