package himedia.project.erpro.production.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.production.entity.Inspection;

public interface InspectionRepository extends JpaRepository<Inspection, Long>{
	public List<Inspection> findAll();
	Optional<Inspection> findById(Long id);
}
