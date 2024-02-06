package himedia.project.erpro.inventory.dto;

import himedia.project.erpro.inventory.entity.Bom;
import lombok.*;

// 김주원
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BomDto {
    private Long id;
    private Long itemId;
    private Long materialId;
    private Integer requiredAmount;
    private String note;

    public Bom toEntity() {
        return Bom.builder()
                .id(this.id)
                .itemId(this.itemId)
                .materialId(this.materialId)
                .requiredAmount(this.requiredAmount)
                .note(this.note)
                .build();
    }
    
    public Bom toEntity(Long itemId) {
    	return Bom.builder()
    			.id(this.id)
    			.itemId(itemId)
    			.materialId(this.materialId)
    			.requiredAmount(this.requiredAmount)
    			.note(this.note)
    			.build();
    }
}
