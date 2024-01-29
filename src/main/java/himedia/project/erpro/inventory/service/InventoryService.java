package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.dto.InventoryDto;
import himedia.project.erpro.inventory.entity.Inventory;
import himedia.project.erpro.inventory.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InventoryService {
	private final InventoryRepository inventoryRepository;
	private final ModelMapper modelMapper;

	 public List<InventoryDto> getInventoryAll() {
	        List<Inventory> inventoryList = inventoryRepository.findAll();

	        return inventoryList.stream()
	                .map(this::convertToDto)
	                .collect(Collectors.toList());
	    }

	    private InventoryDto convertToDto(Inventory inventory) {
	        return modelMapper.map(inventory, InventoryDto.class);
	    }
}
