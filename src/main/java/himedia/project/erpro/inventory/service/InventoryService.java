package himedia.project.erpro.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.entity.Inventory;
import himedia.project.erpro.inventory.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InventoryService {
	private final InventoryRepository inventoryRepository;
	
	public List<Inventory> getInventoryAll() {
		List<Inventory> inventoryList = inventoryRepository.findAll();
		return inventoryList;
	}
}
