package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.order.dto.InvoiceDto;
import himedia.project.erpro.order.dto.InvoiceItemDto;
import himedia.project.erpro.order.entity.Invoice;
import himedia.project.erpro.order.entity.InvoiceItem;
import himedia.project.erpro.order.repository.InvoiceItemRepository;
import himedia.project.erpro.order.repository.InvoiceRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InvoiceService {
	private final InvoiceRepository invoiceRepository;
	private final InvoiceItemRepository invoiceItemRepository;
	
	public List<InvoiceDto> getInviceAll() {
		List<Invoice> invoiceList = invoiceRepository.findAll();
		List<InvoiceDto> invoiceDtoList = invoiceList.stream().map(Invoice::toDto).collect(Collectors.toList());
		return invoiceDtoList;
	}
	
	public InvoiceDto getInvoiceById(Long id) {
		Invoice invoice = invoiceRepository.findById(id)
				.orElseThrow(()-> new EntityNotFoundException("Invoice not found with invoiceID : " + id));
		InvoiceDto invoiceDto = invoice.toDto();
		return invoiceDto;
	}
	
	public InvoiceDto createInvoice(InvoiceDto invoiceDto) {
		Invoice invoice = invoiceDto.toEntity();
		Invoice saveInvoice = invoiceRepository.save(invoice);
		return saveInvoice.toDto();
	}
	
	public InvoiceDto updateInvoice(InvoiceDto invoiceDto) {
		Invoice invoice = invoiceDto.toEntity();
		Optional<Invoice> existInvoice = invoiceRepository.findById(invoice.getId());
		
		if(existInvoice.isPresent()) {
			Invoice updateInvoice = invoiceRepository.save(invoice);
			return updateInvoice.toDto();
		} else {
			return null;
		}
	}
	
	public boolean deleteInvoiceList(List<Long> idList) {
		int deletedInvoice = invoiceRepository.deleteAllByIdIn(idList);
		if(deletedInvoice > 0 && deletedInvoice == idList.size()) {
			return true;
		} else {
			return false;
		}
	}
	
	// 매입/매출 전표 품목 파트
	
	public List<InvoiceItemDto> getInvoiceItems(Long invoiceId) {
		List<InvoiceItem> invoiceItemList = invoiceItemRepository.findAllByInvoiceId(invoiceId);
		List<InvoiceItemDto> invoiceItemDtoList = invoiceItemList.stream().map(InvoiceItem::toDto).collect(Collectors.toList());
		return invoiceItemDtoList;
	}
	
	public InvoiceItemDto getInvoiceItem(Long id) {
		InvoiceItemDto invoiceItemDto = invoiceItemRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("InvoiceItem not found with ID : " + id))
				.toDto();
		return invoiceItemDto;
	}
	
	public InvoiceItemDto createInvoiceItem(InvoiceItemDto invoiceItemDto) {
		InvoiceItemDto saveInvoiceItemDto = Optional.ofNullable(invoiceItemRepository.save(invoiceItemDto.toEntity()))
						.orElseThrow(() -> new RuntimeException("Invoice save failed"))
						.toDto();
		return saveInvoiceItemDto;
	}
	
	public InvoiceItemDto updateInvoiceItem(InvoiceItemDto invoiceItemDto) {
		Optional<InvoiceItem> invoiceItemUpt = invoiceItemRepository.findById(invoiceItemDto.getId());
		
		if(invoiceItemUpt.isEmpty()) {
			throw new EntityNotFoundException("InvoiceItem not found with ID : " + invoiceItemDto.getId());		
		}
		
		InvoiceItemDto saveInvoiceItemDto = invoiceItemRepository.save(invoiceItemDto.toEntity()).toDto();
		return saveInvoiceItemDto;
	}
	
	public void deleteInvoiceItemList(List<Long> idList) {
		invoiceItemRepository.deleteAllById(idList);
	}
}
