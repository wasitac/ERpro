package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.dto.StoreItemDto;
import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.entity.StoreItem;
import himedia.project.erpro.inventory.repository.StoreItemRepository;
import himedia.project.erpro.inventory.repository.StoreRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
	private final StoreRepository storeRepository;
	private final StoreItemRepository storeItemRepository;

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

	public StoreItemDto createStoreItem(StoreItemDto storeItemDto) {
		StoreItemDto savedStoreItemDto = Optional.ofNullable(storeItemRepository.save(storeItemDto.toEntity()))
				.orElseThrow(() -> new RuntimeException("StoreItem save failed")).toDto();

		return savedStoreItemDto;
	}

	public StoreItemDto updateStoreItem(StoreItemDto storeItemDto) {
		Optional<StoreItem> optStoreItem = storeItemRepository.findById(storeItemDto.getId());

		if (optStoreItem.isEmpty()) {
			throw new EntityNotFoundException("StoreItem not found with ID: " + storeItemDto.getId());
		}

		StoreItemDto savedStoreItemDto = storeItemRepository.save(storeItemDto.toEntity()).toDto();
		return savedStoreItemDto;
	}

	public void deleteStoreItemList(List<Long> idList) {
		storeItemRepository.deleteAllById(idList);
	}

}