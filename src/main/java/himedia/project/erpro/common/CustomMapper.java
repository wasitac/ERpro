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
	
	public void map(Object source, Object destination) {
		modelMapper.map(source, destination);
	}
	
	public <E, D> D map(E source, Class<D> destinationType) {
		return modelMapper.map(source, destinationType);
	}
	
	/**
	 * 주어진 entityList를 dtoClass에 해당하는 DTO 리스트로 매핑합니다.
	 */
	public <E, D> List<D> toDtoList(List<E> entityList, Class<D> dtoClass) {
		return entityList.stream()
				.map(entity -> modelMapper.map(entity, dtoClass))
				.collect(Collectors.toList());
	}
}
