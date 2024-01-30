package himedia.project.erpro.production.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.production.entity.Production;

public interface ProductionRepository extends JpaRepository<Production, Long>{
	public List<Production> findAll();
	public Optional<Production> findById(Long id);
}
