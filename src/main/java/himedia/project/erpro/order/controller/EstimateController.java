package himedia.project.erpro.order.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.order.dto.EstimateDto;
import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.service.EstimateService;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class EstimateController {
	private final EstimateService estimateService;
	
	@GetMapping("/estimate")
	public ResponseEntity<Message> estimate() {
		List<EstimateDto> dataList = estimateService.getEstimateAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/estimate/{id}")
	public ResponseEntity<Message> detatilEstimate(@PathVariable(value="id") Long id) {
		EstimateDto data = estimateService.getEstimateById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
