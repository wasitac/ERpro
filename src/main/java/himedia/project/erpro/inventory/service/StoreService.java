package himedia.project.erpro.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.dto.StoreItemDto;
import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.entity.StoreItem;
import himedia.project.erpro.inventory.repository.StoreItemRepository;
import himedia.project.erpro.inventory.repository.StoreRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
	private final StoreRepository storeRepository;
	private final StoreItemRepository storeItemRepository;
	private final CustomMapper mapper;

	public List<StoreDto> getStoreAll() { 
		List<Store> storeList = storeRepository.findAll();
		List<StoreDto> storeDtoList = mapper.toDtoList(storeList, StoreDto.class);

		return storeDtoList;
	}
	
	public List<StoreItemDto> getStoreItem() {
		List<StoreItem> storeItemList = storeItemRepository.findByStoreId();
		List<StoreItemDto> storeItemDtoList = mapper.toDtoList(storeItemList, StoreItemDto.class);
		return storeItemDtoList;
	}
	
	
}
