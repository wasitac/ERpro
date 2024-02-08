package himedia.project.erpro.production.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import himedia.project.erpro.production.dto.InspectionDto;
import himedia.project.erpro.production.entity.Inspection;
import himedia.project.erpro.production.repository.InspectionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class InspectionService {
	private final InspectionRepository inspectionRepository;

	public List<InspectionDto> getInspectionAll() {
		List<Inspection> inspectionList = inspectionRepository.findAll();
		List<InspectionDto> inspectionDtoList = inspectionList.stream()
				.map(Inspection::toDto)
				.collect(Collectors.toList());
		return inspectionDtoList;
	}

	public InspectionDto getInspection(Long id) { 
		InspectionDto inspectionDto = inspectionRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Inspection not found with ID: " + id))
				.toDto();
		
		return inspectionDto;
	}

	public InspectionDto createInspection(InspectionDto inspectionDto) {
		InspectionDto savedInspectionDto = Optional.ofNullable(inspectionRepository.save(inspectionDto.toEntity()))
				.orElseThrow(() -> new RuntimeException("Inspection save failed"))
				.toDto();

		return savedInspectionDto;
	}
	
	public InspectionDto updateInspection(InspectionDto inspectionDto) {
		 Optional<Inspection> optInspection = inspectionRepository.findById(inspectionDto.getId());
		 
		 if(optInspection.isEmpty()) {
			 throw new EntityNotFoundException("Inspection not found with ID: " + inspectionDto.getId());
		 }
		 
		 InspectionDto savedInspectionDto = inspectionRepository.save(inspectionDto.toEntity()).toDto();
		 return savedInspectionDto;			 			 
	}

	public void deleteInspectionList(List<Long> idList) {
		inspectionRepository.deleteAllById(idList);
	}
}