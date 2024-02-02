package himedia.project.erpro.production.controller;

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
import himedia.project.erpro.production.dto.InspectionDto;
import himedia.project.erpro.production.service.InspectionService;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
public class InspectionController {
	private final InspectionService inspectionService;
	
	@GetMapping("/inspection")
	public ResponseEntity<Message> inspection() {
		List<InspectionDto> dataList = inspectionService.getInspectionAll();
		Message returnData = new Message("제품 검수", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/inspection/{id}")
	public ResponseEntity<Message> detailInspection(@PathVariable(value="id") Long id) {
		InspectionDto data = inspectionService.getInspection(id);
		Message returnData = new Message("제품 검수 상세", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/inspection")
	public ResponseEntity<Message> addInspection(@RequestBody InspectionDto inspectionDto){
		InspectionDto dataList = inspectionService.createInspection(inspectionDto);
		Message returnData = new Message("제품 검수 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/inspection")
	public ResponseEntity<Message> editInspection(@RequestBody InspectionDto inspectionDto){
		InspectionDto data = inspectionService.updateInspection(inspectionDto);
		Message returnData = new Message("제품 검수 추가", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@DeleteMapping("/inspection")
	public ResponseEntity<Message> deleteInspection(@RequestBody List<Long> idList){
		inspectionService.deleteInspectionList(idList);
		Message returnData = new Message("제품 검수 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}