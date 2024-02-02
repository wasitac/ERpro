package himedia.project.erpro.order.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "b_nm")
	private String bNm;
	
	@Column(name = "b_no")
	private String bNo;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "due_date")
	private Date dueDate;
	
	@Column(name = "completion_date")
	private Date completionDate;
}
