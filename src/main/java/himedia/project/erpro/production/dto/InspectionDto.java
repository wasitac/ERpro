package himedia.project.erpro.production.dto;

import himedia.project.erpro.trade.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InspectionDto {
	private Long id;
	private Long storeId;
	private String proposerName;
	private String inspectorName;
	private Long itemId;
	private String itemName;
	private Integer unit;
	private Integer spec;
	private Integer count;
	private Integer eligible;
	private Integer ineligible;
	private String pass;
	private String inspectionDate;

		    public Inspection toEntity() {
        return Inspection.builder()
								.id(this.id)
								.storeId(this.storeId)
								.proposerId(this.proposerId)
								.inspectorId(this.inspectorId)
								.itemId(this.itemId)
								.itemName(this.itemName)
								.unit(this.unit)
								.spec(this.spec)
								.count(this.count)
								.eligible(this.eligible)
								.ineligible(this.ineligible)
								.pass(this.pass)
                .build();
    }
}
