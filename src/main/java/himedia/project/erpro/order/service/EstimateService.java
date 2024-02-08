package himedia.project.erpro.order.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.order.dto.EstimateDto;
import himedia.project.erpro.order.dto.EstimateItemDto;
import himedia.project.erpro.order.entity.Estimate;
import himedia.project.erpro.order.entity.EstimateItem;
import himedia.project.erpro.order.repository.EstimateItemRepository;
import himedia.project.erpro.order.repository.EstimateRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EstimateService {
	private final EstimateRepository estimateRepository;
	private final EstimateItemRepository estimateItemRepository;
	
	public List<EstimateDto> getEstimateAll() {
		List<Estimate> estimateList = estimateRepository.findAll();
		List<EstimateDto> estimateDtoList = estimateList.stream().map(Estimate::toDto).collect(Collectors.toList());
		return estimateDtoList;
	}
	
	public EstimateDto getEstimateById(Long id){
		Estimate estimate = estimateRepository.findById(id)
				.orElseThrow(()-> new EntityNotFoundException("Estimate not found with estimateID : " + id));
		EstimateDto estimateDto = estimate.toDto();
		return estimateDto;
	}
	
	
	public EstimateDto createEstimate(EstimateDto estimateDto) {
		Estimate estimate = estimateDto.toEntity();
		Estimate saveEstimate = estimateRepository.save(estimate);
		return saveEstimate.toDto();
	}
	
	public EstimateDto updateEstimate(EstimateDto estimateDto) {
		Estimate estimate = estimateDto.toEntity();
		Optional<Estimate> existEstimate = estimateRepository.findById(estimate.getId());
		
		if(existEstimate.isPresent()) {
			Estimate updateEstimate = estimateRepository.save(estimate);
			return updateEstimate.toDto();
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
	
	// 견적서 품목 파트
	
	public List<EstimateItemDto> getEstimateItems(Long estimateId) {
		List<EstimateItem> estimateItemList = estimateItemRepository.findAllByEstimateId(estimateId);
		List<EstimateItemDto> estimateItemDtoList = estimateItemList.stream().map(EstimateItem::toDto).collect(Collectors.toList());
		return estimateItemDtoList;
	}
	
	public EstimateItemDto getEstimateItem(Long id) {
		EstimateItemDto estimateItemDto = estimateItemRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("EstimateItem not found with ID : " + id))
				.toDto();
		return estimateItemDto;
	}
	
	public EstimateItemDto createEstimateItem(EstimateItemDto estimateItemDto) {
		EstimateItemDto saveEstimateItemDto = Optional.ofNullable(estimateItemRepository.save(estimateItemDto.toEntity()))
						.orElseThrow(() -> new RuntimeException("Estimate save failed"))
						.toDto();
		return saveEstimateItemDto;
	}
	
	public EstimateItemDto updateEstimateItem(EstimateItemDto estimateItemDto) {
		Optional<EstimateItem> estimateItemUpt = estimateItemRepository.findById(estimateItemDto.getId());
		
		if(estimateItemUpt.isEmpty()) {
			throw new EntityNotFoundException("EstimateItem not found with ID : " + estimateItemDto.getId());		
		}
		
		EstimateItemDto saveEstimateItemDto = estimateItemRepository.save(estimateItemDto.toEntity()).toDto();
		return saveEstimateItemDto;
	}
	
	public void deleteEstimateItemList(List<Long> idList) {
		estimateItemRepository.deleteAllById(idList);
	}
}
