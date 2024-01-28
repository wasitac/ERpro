package himedia.project.erpro.inventory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.inventory.entity.Store;


public interface StoreRepository extends JpaRepository<Store, Long>{
	public List<Store> findAll();
	public Optional<Store> findById(Long id);
}