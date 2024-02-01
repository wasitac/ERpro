package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long>{
	public List<Invoice> findAll();
	public Optional<Invoice> findById(Long id);
}
