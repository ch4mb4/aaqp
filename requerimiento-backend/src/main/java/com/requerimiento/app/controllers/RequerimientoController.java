package com.requerimiento.app.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.requerimiento.app.entities.Requerimiento;
import com.requerimiento.app.services.RequerimientoService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/requerimiento")
public class RequerimientoController {

	@Autowired
	private RequerimientoService requerimientoService;

	@PostMapping("/insert")
	public void insert(@RequestBody Requerimiento requerimiento) {
		requerimientoService.insert(requerimiento);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") Integer id) {
		requerimientoService.delete(id);
	}

	@PostMapping("/update/{id}")
	public void update(@RequestBody Requerimiento requerimiento, @PathVariable("id") Integer id) {
		requerimientoService.update(requerimiento);
	}

	@RequestMapping("/get/{id}")
	public Requerimiento get(@PathVariable("id") Integer id) {
		Requerimiento requerimiento = requerimientoService.get(id);
		return requerimiento;
	}

	@RequestMapping("/list")
	public List<Requerimiento> list() {
		List<Requerimiento> requerimientos = requerimientoService.list();
		return requerimientos;
	}
	
	@PostMapping("/upload")
	public void upload(@RequestParam("file") MultipartFile file) {
        try {
    		byte[] bytes = file.getBytes();
            String uploadFolder="D:\\Upload\\";
    		Path path = Paths.get(uploadFolder + file.getOriginalFilename());
			Files.write(path, bytes);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
