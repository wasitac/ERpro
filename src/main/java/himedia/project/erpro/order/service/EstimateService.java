package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.order.dto.EstimateDto;
import himedia.project.erpro.order.entity.Estimate;
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
	
	
	public EstimateDto createEstimate(EstimateDto estimateDto) {
		Estimate estimate = mapper.map(estimateDto, Estimate.class);
		Estimate estimateSave = estimateRepository.save(estimate);
		EstimateDto estimateDtoSave = mapper.map(estimateSave, EstimateDto.class);
		return estimateDtoSave;
	}
	
	public EstimateDto updateEstimate(EstimateDto estimateDto) {
		Estimate estimate = estimateDto.toEntity();
		Optional<Estimate> existEstimate = estimateRepository.findById(estimate.getId());
		
		if(existEstimate.isPresent()) {
			Estimate estimateUpdate = estimateRepository.save(estimate);
			return estimateUpdate.toEstimateDto();
		} else {
			return null;
		}
	}
	
	public boolean deleteEstimateList(List<Long> idList) {
		int deletedEstimate = estimateRepository.deleteAllByIdIn(idList);
		if(deletedEstimate > 0 && deletedEstimate == idList.size()) {
			return true;
		} else {
			return false;
		}
	}
}
