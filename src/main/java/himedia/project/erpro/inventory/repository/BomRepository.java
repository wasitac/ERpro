package himedia.project.erpro.inventory.repository;

import himedia.project.erpro.inventory.entity.Bom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BomRepository extends JpaRepository<Bom, Long> {

    @Query("SELECT DISTINCT a.itemId FROM Bom a")
    List<Long> findDistinctItemIds();

    List<Bom> findByItemId(Long itemId);
}
