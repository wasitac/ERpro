package himedia.project.erpro.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import himedia.project.erpro.inventory.entity.Store;

public interface StoreRepository extends JpaRepository<Store, Long>{}