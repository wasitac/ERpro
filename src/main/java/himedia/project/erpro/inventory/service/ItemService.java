package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import himedia.project.erpro.inventory.dto.ItemDto;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.entity.Inventory;
import himedia.project.erpro.inventory.entity.Item;
import himedia.project.erpro.inventory.repository.InventoryRepository;
import himedia.project.erpro.inventory.repository.ItemRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {
	private final ItemRepository itemRepository;
	private final InventoryRepository inventoryRepository;
	
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
		//물품 추가 시 재고 목록에 추가 - 이지홍
		Inventory inventory = Inventory.builder()
								.id(item.getId())
								.itemName(item.getItemName())
								.openingCount(0)
								.openingAmount(0)
								.storeIn(0)
								.storeOut(0)
								.currentInventory(0)
								.appropriateInventory(0)
								.lack(0)
								.build();
		inventoryRepository.save(inventory);
		return saveItem.toDto();
	}

	// 물품 수정 - 김주원
	public ItemDto updateItem(ItemDto itemDto) {
		Item item = itemDto.toEntity();

		Optional<Item> existItem = itemRepository.findById(item.getId());
		
		if(existItem.isPresent()) {
			Item updateItem = itemRepository.save(item);
			//물품 수정 시 재고 목록 수정 - 이지홍
			Inventory existInventory = inventoryRepository.findById(item.getId()).orElseThrow(() -> new EntityNotFoundException("Item not found with ID: " + item.getId()));;
			Inventory inventory = Inventory.builder()
									.id(updateItem.getId())
									.itemName(updateItem.getItemName())
									.openingCount(existInventory.getOpeningCount())
									.openingAmount(existInventory.getOpeningAmount())
									.storeIn(existInventory.getStoreIn())
									.storeOut(existInventory.getStoreOut())
									.currentInventory(existInventory.getCurrentInventory())
									.appropriateInventory(existInventory.getAppropriateInventory())
									.lack(existInventory.getLack())
									.build();
			inventoryRepository.save(inventory);
			return updateItem.toDto();
		} else {
			return null;
		}
	}

	// 물품 삭제 - 김주원
	public boolean deleteItemList(List<Long> idList) {
		int deletedCount = itemRepository.deleteAllByIdIn(idList);
		// 물품 삭제 시 재고 목록 삭제 - 이지홍
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}
}  
