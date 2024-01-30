package himedia.project.erpro.common;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CustomMapper{
	
	private final ModelMapper modelMapper;
	
	public <E, D> D toDto(E entity, Class<D> dtoClass) {
		return modelMapper.map(entity, dtoClass);
	}
	
	public <D, E> E toEntity(D dto, Class<E> entityClass) {
		return modelMapper.map(dto, entityClass);
	}
	
	// findAll로 받은 Entity리스트를 Dto리스트로 변환해주는 메서드 - 이지홍
	public <E, D> List<D> toDtoList(List<E> entityList, Class<D> dtoClass) {
		return entityList.stream()
				.map(entity -> modelMapper.map(entity, dtoClass))
				.collect(Collectors.toList());
	}
}
