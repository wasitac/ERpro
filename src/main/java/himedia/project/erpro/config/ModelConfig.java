package himedia.project.erpro.config;

import java.util.Objects;

import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import himedia.project.erpro.enums.UserRank;
import jakarta.annotation.PostConstruct;

//이지홍
@Configuration
public class ModelConfig {
	// Model Mapper
	@Bean
	protected ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
}
