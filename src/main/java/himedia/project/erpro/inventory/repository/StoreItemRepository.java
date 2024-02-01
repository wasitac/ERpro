package himedia.project.erpro.inventory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.inventory.entity.StoreItem;

public interface StoreItemRepository extends JpaRepository<StoreItem, Long>{
	public List<StoreItem> findAll();
	public List<StoreItem> findByStoreId(Long storeId);
	public Optional<StoreItem> findById(Long id);
}