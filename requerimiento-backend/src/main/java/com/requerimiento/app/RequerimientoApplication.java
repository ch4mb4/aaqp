package com.requerimiento.app;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(value = "com.requerimiento.app.mappers")
@SpringBootApplication
public class RequerimientoApplication {

	public static void main(String[] args) {
		SpringApplication.run(RequerimientoApplication.class, args);
	}
}
