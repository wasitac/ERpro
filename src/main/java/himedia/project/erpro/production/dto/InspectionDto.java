package himedia.project.erpro.production.dto;

import java.sql.Date;

import himedia.project.erpro.production.entity.Inspection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
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
	private String unit;
	private String spec;
	private Integer count;
	private Integer eligible;
	private Integer ineligible;
	private String pass;
	private Date inspectionDate;

		public Inspection toEntity() {
        return Inspection.builder()
				.id(this.id)
				.storeId(this.storeId)
				.proposerName(this.proposerName)
				.inspectorName(this.inspectorName)
				.itemId(this.itemId)
				.itemName(this.itemName)
				.unit(this.unit)
				.spec(this.spec)
				.count(this.count)
				.eligible(this.eligible)
				.ineligible(this.ineligible)
				.pass(this.pass)
				.inspectionDate(this.inspectionDate)
                .build();
    }
}
