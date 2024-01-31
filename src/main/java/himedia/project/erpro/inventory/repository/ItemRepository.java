package himedia.project.erpro.inventory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.inventory.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{
	public List<Item> findAll();
	public Optional<Item> findById(Long id);
	public int deleteAllByIdIn(List<Long> idList);
}
