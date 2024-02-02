package himedia.project.erpro.inventory.entity;

import himedia.project.erpro.inventory.dto.BomDto;
import himedia.project.erpro.inventory.dto.InventoryDto;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Bom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "item_id")
    private Long itemId;

    @Column(name = "material_id")
    private Long materialId;

    @Column(name = "required_amount")
    private Integer requiredAmount;

    private String note;

    public BomDto toDto() {
        return BomDto.builder()
                .id(this.id)
                .itemId(this.itemId)
                .materialId(this.materialId)
                .requiredAmount(this.requiredAmount)
                .note(this.note)
                .build();
    }
}
