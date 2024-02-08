package himedia.project.erpro.production.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.production.dto.ProductionDto;
import himedia.project.erpro.production.entity.Production;
import himedia.project.erpro.production.repository.ProductionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductionService {
	private final ProductionRepository productionRepository;

	public List<ProductionDto> getProductionAll() {
		List<Production> productionList = productionRepository.findAll();
		List<ProductionDto> productionDtoList = productionList.stream()
				.map(Production::toDto)
				.collect(Collectors.toList());
		return productionDtoList;
	}
	
	public ProductionDto getProduction(Long id) { 
		ProductionDto productionDto = productionRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Production not found with ID: " + id))
				.toDto();
		
		return productionDto;
	}

	public ProductionDto createProduction(ProductionDto productionDto) {
		ProductionDto savedProductionDto = Optional.ofNullable(productionRepository.save(productionDto.toEntity()))
				.orElseThrow(() -> new RuntimeException("Production save failed"))
				.toDto();

		return savedProductionDto;
	}
	
	public ProductionDto updateProduction(ProductionDto productionDto) {
		 Optional<Production> optProduction = productionRepository.findById(productionDto.getId());
		 
		 if(optProduction.isEmpty()) {
			 throw new EntityNotFoundException("Production not found with ID: " + productionDto.getId());
		 }
		 
		 ProductionDto savedProductionDto = productionRepository.save(productionDto.toEntity()).toDto();
		 return savedProductionDto;			 			 
	}

	public void deleteProductionList(List<Long> idList) {
		productionRepository.deleteAllById(idList);
	}
}
