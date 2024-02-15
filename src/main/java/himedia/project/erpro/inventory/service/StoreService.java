// 이지홍
package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.dto.StoreItemDto;
import himedia.project.erpro.inventory.entity.Inventory;
import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.entity.StoreItem;
import himedia.project.erpro.inventory.enums.StoreSort;
import himedia.project.erpro.inventory.repository.InventoryRepository;
import himedia.project.erpro.inventory.repository.StoreItemRepository;
import himedia.project.erpro.inventory.repository.StoreRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
	private final StoreRepository storeRepository;
	private final StoreItemRepository storeItemRepository;
	private final InventoryRepository inventoryRepository;

	public List<StoreDto> getStoreAll() {
		List<Store> storeList = storeRepository.findAll();
		List<StoreDto> storeDtoList = storeList.stream().map(Store::toDto).collect(Collectors.toList());
		
		return storeDtoList;
	}

	public StoreDto getStore(Long id) {
		StoreDto storeDto = storeRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Store not found with ID: " + id)).toDto();

		return storeDto;
	}

	public StoreDto createStore(StoreDto storeDto) {
		StoreDto savedStoreDto = Optional.ofNullable(storeRepository.save(storeDto.toEntity()))
				.orElseThrow(() -> new RuntimeException("Store save failed")).toDto();

		return savedStoreDto;
	}

	public StoreDto updateStore(StoreDto storeDto) {
		Optional<Store> optStore = storeRepository.findById(storeDto.getId());

		if (optStore.isEmpty()) {
			throw new EntityNotFoundException("Store not found with ID: " + storeDto.getId());
		}

		StoreDto savedStoreDto = storeRepository.save(storeDto.toEntity()).toDto();
		return savedStoreDto;
	}

	public void deleteStoreList(List<Long> idList) {
		storeRepository.deleteAllById(idList);
	}

	// StoreItem 변경 시 재고에 반영하는 메서드
	public void editInventory(StoreItem storeItem, boolean isAdd) {
		Integer count = isAdd ? storeItem.getCount() : -storeItem.getCount();
		Integer in = 0; 
		Integer out = 0;
		
		Store store = storeRepository.findById(storeItem.getStoreId())
				.orElseThrow(() -> new EntityNotFoundException("Store not found with ID: " + storeItem.getStoreId()));
		Inventory inventory = inventoryRepository.findById(storeItem.getItemId())
				.orElseThrow(() -> new EntityNotFoundException("Inventory not found with ID: " + storeItem.getItemId()));
		
		if(store.getSort() == StoreSort.OUT) {
			out = count;
		} else {
			in = count;
		}
		
		Inventory newInventory = Inventory.builder()
				.id(storeItem.getItemId())
				.itemName(inventory.getItemName())
				.openingCount(inventory.getOpeningCount())
				.openingAmount(inventory.getOpeningAmount())
				.storeIn(inventory.getStoreIn() + in)
				.storeOut(inventory.getStoreOut() + out)
				.currentInventory(inventory.getOpeningCount() + (inventory.getStoreIn() + in) - (inventory.getStoreOut() + out))
				.appropriateInventory(inventory.getAppropriateInventory())
				.lack(inventory.getAppropriateInventory() - (inventory.getCurrentInventory() + in - out))
				.build();
		inventoryRepository.save(newInventory);
	}
	
	public List<StoreItemDto> getStoreItems(Long storeId) {
		List<StoreItem> storeItemList = storeItemRepository.findAllByStoreId(storeId);
		List<StoreItemDto> storeItemDtoList =  storeItemList.stream().map(StoreItem::toDto).collect(Collectors.toList());
		return storeItemDtoList;
	}

	public StoreItemDto getStoreItem(Long id) {
		StoreItemDto storeItemDto = storeItemRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("StoreItem not found with ID: " + id)).toDto();

		return storeItemDto;
	}

	// 입/출고 품목 추가
	public StoreItemDto createStoreItem(StoreItemDto storeItemDto) {
		StoreItem savedStoreItem = Optional.ofNullable(storeItemRepository.save(storeItemDto.toEntity()))
				.orElseThrow(() -> new RuntimeException("StoreItem save failed"));
		
		editInventory(savedStoreItem, true);
		return savedStoreItem.toDto();
	}

	// 입/출고 품목 수정
	public StoreItemDto updateStoreItem(StoreItemDto storeItemDto) {
		StoreItem storeItem = storeItemRepository.findById(storeItemDto.getStoreId())
				.orElseThrow(() -> new EntityNotFoundException("StoreItem not found with ID: " + storeItemDto.getStoreId()));
		System.out.println(storeItem.getItemName());
		editInventory(storeItem, false);
		
		StoreItem savedStoreItem = storeItemRepository.save(storeItemDto.toEntity());
		editInventory(savedStoreItem, true);
		
		return savedStoreItem.toDto();
	}

	// 입/출고 품목 삭제
	public void deleteStoreItemList(List<Long> idList) {
		List<StoreItem> storeItemList = storeItemRepository.findAllById(idList);
		
		for (StoreItem storeItem : storeItemList) {
			editInventory(storeItem, false);
		}
		
		storeItemRepository.deleteAllById(idList);
	}

}