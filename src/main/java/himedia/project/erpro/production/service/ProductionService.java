package himedia.project.erpro.production.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.production.dto.ProductionDto;
import himedia.project.erpro.production.entity.Production;
import himedia.project.erpro.production.repository.ProductionRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductionService {
	private final ProductionRepository productionRepository;
	private final CustomMapper mapper;

	public List<ProductionDto> getProductionAll() {
		List<Production> productionList = productionRepository.findAll();
		List<ProductionDto> productionDtoList = mapper.toDtoList(productionList, ProductionDto.class);
		return productionDtoList;
	}
}
