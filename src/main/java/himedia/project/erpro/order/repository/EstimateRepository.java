package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.Estimate;
import jakarta.transaction.Transactional;

public interface EstimateRepository extends JpaRepository<Estimate, Long>{
	public List<Estimate> findAll();
	public Optional<Estimate> findById(Long id);
	
	@Transactional
	public int deleteAllByIdIn(List<Long> idList);
}
