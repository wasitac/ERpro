package himedia.project.erpro.inventory.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BomDetailDto {

    private Long itemId;
    private List<BomDto> bomList;
}
