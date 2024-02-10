package himedia.project.erpro.order.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.order.dto.InvoiceDto;
import himedia.project.erpro.order.dto.InvoiceItemDto;
import himedia.project.erpro.order.service.InvoiceService;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class InvoiceController {
	private final InvoiceService invoiceService;
	
	@GetMapping("/api/invoice")
	public ResponseEntity<Message> estimate() {
		List<InvoiceDto> dataList = invoiceService.getInviceAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@GetMapping("/api/invoice/{id}")
	public ResponseEntity<Message> detatilOrders(@PathVariable(value="id") Long id) {
		InvoiceDto data = invoiceService.getInvoiceById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PostMapping("/api/invoice")
	public ResponseEntity<Message> addInvoice(@RequestBody InvoiceDto invoiceDto) {
		InvoiceDto dataList = invoiceService.createInvoice(invoiceDto);
		Message returnData = new Message("전표 저장 성공", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	@PutMapping("/api/invoice")
	public ResponseEntity<Message> updateInvoice(@RequestBody InvoiceDto invoiceDto) {
		InvoiceDto data = invoiceService.updateInvoice(invoiceDto);
		Message returnData = new Message("전표 수정 성공", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/invoice")
	public ResponseEntity<Message> deleteInvoice(@RequestBody List<Long> idList) {
		invoiceService.deleteInvoiceList(idList);
		Message returnData = new Message("전표 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 매입/매출 품목
	@GetMapping("/api/invoiceItem")
	public ResponseEntity<Message> invoiceItem() {
		Message returnData = new Message("invoiceItem");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@GetMapping("/api/invoiceItem/{invoiceId}")
	public ResponseEntity<Message> invoiceItems(@PathVariable(value="invoiceId") Long invoiceId) {
		List<InvoiceItemDto> dataList = invoiceService.getInvoiceItems(invoiceId);
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@GetMapping("/api/invoiceItem/{invoiceId}/{rowId}")
	public ResponseEntity<Message> invoiceItemRow(@PathVariable(value="rowId") Long rowId) {
		InvoiceItemDto data = invoiceService.getInvoiceItem(rowId);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@PostMapping("/api/invoiceItem")
	public ResponseEntity<Message> addInvoiceItem(@RequestBody InvoiceItemDto invoiceItemDto) {
		InvoiceItemDto dataList = invoiceService.createInvoiceItem(invoiceItemDto);
		Message returnData = new Message("전표 품목 추가", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@PutMapping("/api/invoiceItem")
	public ResponseEntity<Message> updateInvoiceItem(@RequestBody InvoiceItemDto invoiceItemDto) {
		InvoiceItemDto data = invoiceService.updateInvoiceItem(invoiceItemDto);
		Message returnData = new Message("전표 품목 수정", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/invoiceItem")
	public ResponseEntity<Message> deleteOrdersItem(@RequestBody List<Long> idList) {
		invoiceService.deleteInvoiceItemList(idList);
		Message returnData = new Message("전표 품목 삭제");
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
}
