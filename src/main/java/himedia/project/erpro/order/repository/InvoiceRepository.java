package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.Invoice;
import jakarta.transaction.Transactional;

public interface InvoiceRepository extends JpaRepository<Invoice, Long>{
	public List<Invoice> findAll();
	public Optional<Invoice> findById(Long id);
	
	@Transactional
	public int deleteAllByIdIn(List<Long> idList);
}
