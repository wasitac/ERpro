package himedia.project.erpro.inventory.service;

import himedia.project.erpro.inventory.dto.BomDetailDto;
import himedia.project.erpro.inventory.dto.BomDto;
import himedia.project.erpro.inventory.dto.ItemDto;
import himedia.project.erpro.inventory.entity.Bom;
import himedia.project.erpro.inventory.entity.Item;
import himedia.project.erpro.inventory.repository.BomRepository;
import himedia.project.erpro.inventory.repository.ItemRepository;
import himedia.project.erpro.trade.dto.AccountDto;
import himedia.project.erpro.trade.entity.Account;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class BomService {

    private final BomRepository bomRepository;
    private final ItemRepository itemRepository;

    // Bom 목록 조회 - 김주원
    public List<ItemDto> getBomListAll() {
        List<Long> itemIdList = bomRepository.findDistinctItemIds();
        List<Item> itemList = itemRepository.findAllById(itemIdList);

        List<ItemDto> itemDtoList = itemList.stream()
                .map(Item::toDto)
                .collect(Collectors.toList());

        return itemDtoList;
    }

    // Bom 상세 조회 - 김주원
    public BomDetailDto getBomByItemId(Long itemId) {

        List<Bom> bomList = bomRepository.findByItemId(itemId);

        List<BomDto> bomDtoList = bomList.stream()
                .map(Bom::toDto)
                .collect(Collectors.toList());

        BomDetailDto result = new BomDetailDto();
        result.setItemId(itemId);
        result.setBomList(bomDtoList);

        return result;
    }

    // Bom 추가 - 김주원
    public Boolean createBom(BomDetailDto bomDetailDto) {

        List<BomDto> saveBomList = new ArrayList<>();
        for(BomDto bomDto : bomDetailDto.getBomList()) {
            bomDto.setItemId(bomDetailDto.getItemId());
            BomDto saveBomDto = bomRepository.save(bomDto.toEntity()).toDto();
            saveBomList.add(saveBomDto);
        }

        return saveBomList.size() == bomDetailDto.getBomList().size() ? true : false;
    }

    // Bom 수정 - 김주원
    public Boolean updateBom(BomDetailDto bomDetailDto) {
        bomRepository.deleteByItemId(bomDetailDto.getItemId());

        List<BomDto> saveBomList = new ArrayList<>();
        for(BomDto bomDto : bomDetailDto.getBomList()) {
            bomDto.setItemId(bomDetailDto.getItemId());
            BomDto saveBomDto = bomRepository.save(bomDto.toEntity()).toDto();
            saveBomList.add(saveBomDto);
        }

        return saveBomList.size() == bomDetailDto.getBomList().size() ? true : false;
    }

    // Bom 다중 삭제 - 김주원
    public Boolean deleteBomList(List<Long> itemIdList) {
        bomRepository.deleteByItemIdIn(itemIdList);
        return true;
    }
}
