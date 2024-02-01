package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import himedia.project.erpro.inventory.dto.ItemDto;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.entity.Item;
import himedia.project.erpro.inventory.repository.ItemRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {
	private final ItemRepository itemRepository;

	// 물품 목록 - 김주원
	public List<ItemDto> getItemAll() {
		List<Item> itemList = itemRepository.findAll();

		List<ItemDto> itemDtoList = itemList.stream()
				.map(Item::toDto)
				.collect(Collectors.toList());

		return itemDtoList;
	}

	// 물품 상세 조회 - 김주원
	public ItemDto getItemById(Long itemId) {
		Item item = itemRepository.findById(itemId)
				.orElseThrow(() -> new EntityNotFoundException("Item not found with ID: " + itemId));

		ItemDto itemDto = item.toDto();

		return itemDto;
	}

	// 물품 등록 - 김주원
	public ItemDto createItem(ItemDto itemDto) {
		Item item = itemDto.toEntity();
		Item saveItem = itemRepository.save(item);

		return saveItem.toDto();
	}

	// 물품 수정 - 김주원
	public ItemDto updateItem(ItemDto itemDto) {
		Item item = itemDto.toEntity();

		Optional<Item> existItem = itemRepository.findById(item.getId());
		
		if(existItem.isPresent()) {
			Item updateItem = itemRepository.save(item);
			return updateItem.toDto();
		} else {
			return null;
		}
	}

	// 물품 삭제 - 김주원
	public boolean deleteItemList(List<Long> idList) {
		int deletedCount = itemRepository.deleteAllByIdIn(idList);
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}
}  
