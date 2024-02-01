package himedia.project.erpro.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.order.dto.EstimateDto;
import himedia.project.erpro.order.dto.OrdersDto;
import himedia.project.erpro.order.entity.Estimate;
import himedia.project.erpro.order.entity.Orders;
import himedia.project.erpro.order.repository.EstimateRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EstimateService {
	private final EstimateRepository estimateRepository;
	private final CustomMapper mapper;
	
	public List<EstimateDto> getEstimateAll() {
		List<Estimate> estimateList = estimateRepository.findAll();
		List<EstimateDto> estimateDtoList = mapper.toDtoList(estimateList, EstimateDto.class);
		return estimateDtoList;
	}
	
	public EstimateDto getEstimateById(Long id){
		Estimate estimateId = estimateRepository.findById(id)
				.orElseThrow(()-> new EntityNotFoundException("Estimate not found with estimateID : " + id));
		EstimateDto estimateDtoId = mapper.map(estimateId, EstimateDto.class);
		return estimateDtoId;
	}
}
