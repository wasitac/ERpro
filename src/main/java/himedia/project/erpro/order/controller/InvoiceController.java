package himedia.project.erpro.order.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.order.dto.InvoiceDto;
import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.service.InvoiceService;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class InvoiceController {
	private final InvoiceService invoiceService;
	
	@GetMapping("/invoice")
	public ResponseEntity<Message> estimate() {
		List<InvoiceDto> dataList = invoiceService.getInviceAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/invoice/{id}")
	public ResponseEntity<Message> detatilOrders(@PathVariable(value="id") Long id) {
		InvoiceDto data = invoiceService.getInvoiceById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/invoice")
	public ResponseEntity<Message> addInvoice(@RequestBody InvoiceDto invoiceDto) {
		InvoiceDto dataSave = invoiceService.createInvoice(invoiceDto);
		Message returnData = new Message("저장 성공", dataSave);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/invoice")
	public ResponseEntity<Message> updateInvoice(@RequestBody InvoiceDto invoiceDto) {
		InvoiceDto dataUpdate = invoiceService.updateInvoice(invoiceDto);
		Message returnData = new Message("수정 성공", dataUpdate);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@DeleteMapping("/invoice")
	public ResponseEntity<Message> deleteInvoice(@RequestBody List<Long> idList) {
		boolean dataDelete = invoiceService.deleteInvoiceList(idList);
		Message returnData = new Message(Boolean.toString(dataDelete));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
