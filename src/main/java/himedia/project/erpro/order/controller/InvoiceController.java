package himedia.project.erpro.order.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.order.dto.InvoiceDto;
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
}
