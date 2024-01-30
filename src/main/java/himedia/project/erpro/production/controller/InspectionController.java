package himedia.project.erpro.production.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.production.dto.InspectionDto;
import himedia.project.erpro.production.service.InspectionService;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
public class InspectionController {
	private final InspectionService InspectionService;
	
	@GetMapping("/inspection")
	public ResponseEntity<Message> inspection() {
		List<InspectionDto> dataList = InspectionService.getInspectionAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}