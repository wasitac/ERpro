package himedia.project.erpro.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//이지홍
@Configuration
public class ModelConfig {
	// Model Mapper
	@Bean
	protected ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
}
