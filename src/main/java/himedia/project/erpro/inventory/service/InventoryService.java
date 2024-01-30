package himedia.project.erpro.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.inventory.dto.InventoryDto;
import himedia.project.erpro.inventory.entity.Inventory;
import himedia.project.erpro.inventory.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
public class InventoryService {
	private final InventoryRepository inventoryRepository;
	private final CustomMapper mapper;

	public List<InventoryDto> getInventoryAll() {
		List<Inventory> inventoryList = inventoryRepository.findAll();
		List<InventoryDto> inventoryDtoList = mapper.toDtoList(inventoryList, InventoryDto.class);
		return inventoryDtoList;
	}
}
