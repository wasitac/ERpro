package himedia.project.erpro.production.service;

import java.util.List;

import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.production.dto.InspectionDto;
import himedia.project.erpro.production.entity.Inspection;
import himedia.project.erpro.production.repository.InspectionRepository;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class InspectionService {
	private final InspectionRepository inspectionRepository;
	private final CustomMapper mapper;

	public List<InspectionDto> getInspectionAll() {
		List<Inspection> inspectionList = inspectionRepository.findAll();
		List<InspectionDto> inspectionDtoList = mapper.toDtoList(inspectionList, InspectionDto.class);
		return inspectionDtoList;
	}
}