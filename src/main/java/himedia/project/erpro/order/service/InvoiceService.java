package himedia.project.erpro.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.order.dto.InvoiceDto;
import himedia.project.erpro.order.entity.Invoice;
import himedia.project.erpro.order.repository.InvoiceRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InvoiceService {
	private final InvoiceRepository invoiceRepository;
	private final CustomMapper mapper;
	
	public List<InvoiceDto> getInviceAll() {
		List<Invoice> invoiceList = invoiceRepository.findAll();
		List<InvoiceDto> invoiceDtoList = mapper.toDtoList(invoiceList, InvoiceDto.class);
		return invoiceDtoList;
	}
	
	public InvoiceDto getInvoiceById(Long id) {
		Invoice invoiceId = invoiceRepository.findById(id)
				.orElseThrow(()-> new EntityNotFoundException("Invoice not found with invoiceID : " + id));
		InvoiceDto invoiceDtoId = mapper.map(invoiceId, InvoiceDto.class);
		return invoiceDtoId;
	}
}
