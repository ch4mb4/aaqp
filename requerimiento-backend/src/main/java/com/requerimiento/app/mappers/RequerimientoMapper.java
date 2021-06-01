package com.requerimiento.app.mappers;

import java.util.List;

import com.requerimiento.app.entities.Requerimiento;

public interface RequerimientoMapper {
	public void insert(Requerimiento user);
	
	public void delete(Integer id);
	
	public void update(Requerimiento user);
	
	public Requerimiento get(Integer id);
	
	public List<Requerimiento> list();
}
