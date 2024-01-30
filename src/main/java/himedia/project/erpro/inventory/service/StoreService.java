package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.inventory.dto.StoreDto;
import himedia.project.erpro.inventory.entity.Store;
import himedia.project.erpro.inventory.repository.StoreRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
	private final StoreRepository storeRepository;
	private final CustomMapper mapper;

	public List<StoreDto> getStoreAll() {
		List<Store> storeList = storeRepository.findAll();
		List<StoreDto> storeDtoList = mapper.toDtoList(storeList, StoreDto.class);
		return storeDtoList;
	}
}
