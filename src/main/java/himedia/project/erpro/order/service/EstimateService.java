package himedia.project.erpro.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.order.dto.EstimateDto;
import himedia.project.erpro.order.entity.Estimate;
import himedia.project.erpro.order.repository.EstimateRepository;
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
}
