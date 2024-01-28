package himedia.project.erpro.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.repository.StoreRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
private final StoreRepository storeRepository;
	
	public List<Store> getStoreAll() {
		List<Store> inventoryList = storeRepository.findAll();
		return inventoryList;
	}
}
