package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.InvoiceItem;

public interface InvoiceItemRepository extends JpaRepository<InvoiceItem, Long>{
	public List<InvoiceItem> findAll();
	public List<InvoiceItem> findAllByInvoiceId(Long invoiceId);
	public Optional<InvoiceItem> findById(Long id);
}
