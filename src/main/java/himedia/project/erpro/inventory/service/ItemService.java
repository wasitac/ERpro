package himedia.project.erpro.inventory.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import himedia.project.erpro.inventory.entity.Item;
import himedia.project.erpro.inventory.repository.ItemRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemService {
	private final ItemRepository itemRepository;
	
	public List<Item> getItemAll() {
		List<Item> itemList = itemRepository.findAll();
		return itemList;
	}
	
	public Optional<Item> getItemById(Long itemId) {
		Optional<Item> item = itemRepository.findById(itemId);
		return item;
	}
	
	public Item createItem(Item item) {
		itemRepository.save(item);
		return item;
	}
	
	public Optional<Item> updateItem(Item item) {
		Optional<Item> existItem = itemRepository.findById(item.getId());
		
		if(existItem.isPresent()) {
			Item updateItem = existItem.get();

			// 모든 필드를 업데이트
			BeanUtils.copyProperties(item, updateItem);

			itemRepository.save(updateItem);
			return Optional.of(updateItem);
		} else {
			return Optional.empty();
		}
	}
	
	public List<Item> deleteItem(Long id) {
		Optional<Item> existItem = itemRepository.findById(id);
		if(existItem.isPresent()) {
			itemRepository.deleteById(id);
			return itemRepository.findAll();
		} else {
			throw new EntityNotFoundException("존재하지 않는 아이디 입니다.");
		}
	}
	
	public boolean deleteItemList(List<Long> idList) {
		int deletedCount = itemRepository.deleteAllByIdIn(idList);
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}
}  
