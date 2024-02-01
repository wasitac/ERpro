package himedia.project.erpro.inventory.controller;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.inventory.dto.BomDetailDto;
import himedia.project.erpro.inventory.dto.BomDto;
import himedia.project.erpro.inventory.dto.ItemDto;
import himedia.project.erpro.inventory.service.BomService;
import himedia.project.erpro.trade.dto.AccountDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BomController {

    private final BomService bomService;

    // Bom 목록 - 김주원
    @GetMapping("/bom")
    public ResponseEntity<Message> bom() {
        List<ItemDto> dataList = bomService.getBomListAll();
        Message returnData = new Message("", dataList);
        return new ResponseEntity<>(returnData, HttpStatus.OK);
    }

    // Bom 상세 조회 - 김주원
    @GetMapping("/bom/{itemId}")
    public ResponseEntity<Message> detailBom(@PathVariable(value="itemId") Long itemId) {
        BomDetailDto data = bomService.getBomByItemId(itemId);
        Message returnData = new Message("", data);
        return new ResponseEntity<>(returnData, HttpStatus.OK);
    }

}
