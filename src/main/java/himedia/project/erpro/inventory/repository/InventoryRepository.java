package himedia.project.erpro.inventory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.inventory.entity.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long>{
	public List<Inventory> findAll();
	public int deleteAllByIdIn(List<Long> idList);
}
