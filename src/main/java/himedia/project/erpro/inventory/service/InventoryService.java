package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.dto.InventoryDto;
import himedia.project.erpro.inventory.entity.Inventory;
import himedia.project.erpro.inventory.repository.InventoryRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InventoryService {
	private final InventoryRepository inventoryRepository;

	public List<InventoryDto> getInventoryAll() {
		List<Inventory> inventoryList = inventoryRepository.findAll();
		List<InventoryDto> inventoryDtoList = inventoryList.stream().map(Inventory::toDto).collect(Collectors.toList());
		return inventoryDtoList;
	}
	
	public InventoryDto getInventory(Long id) { 
		InventoryDto inventoryDto = inventoryRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Inventory not found with ID: " + id))
				.toDto();
		
		return inventoryDto;
	}

	public InventoryDto createInventory(InventoryDto inventoryDto) {
		InventoryDto savedInventoryDto = Optional.ofNullable(inventoryRepository.save(inventoryDto.toEntity()))
				.orElseThrow(() -> new RuntimeException("Inventory save failed"))
				.toDto();

		return savedInventoryDto;
	}
  
	public InventoryDto updateInventory(InventoryDto inventoryDto) {
		 Optional<Inventory> optInventory = inventoryRepository.findById(inventoryDto.getId());
		 
		 if(optInventory.isEmpty()) {
			 throw new EntityNotFoundException("Inventory not found with ID: " + inventoryDto.getId());
		 }
		 
		 InventoryDto savedInventoryDto = inventoryRepository.save(inventoryDto.toEntity()).toDto();
		 return savedInventoryDto;			 			 
	}

	public void deleteInventoryList(List<Long> idList) {
		inventoryRepository.deleteAllById(idList);
	}
}
