package himedia.project.erpro.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.order.entity.EstimateItem;

public interface EstimateItemRepository extends JpaRepository<EstimateItem, Long>{
	public List<EstimateItem> findAll();
	public List<EstimateItem> findAllByEstimateId(Long ordersId);
	public Optional<EstimateItem> findById(Long id);
}
