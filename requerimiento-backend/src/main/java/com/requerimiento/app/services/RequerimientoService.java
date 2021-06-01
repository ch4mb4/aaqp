package com.requerimiento.app.services;

import java.util.List;

import com.requerimiento.app.entities.Requerimiento;

public interface RequerimientoService {
	public List<Requerimiento> list();
    public void insert(Requerimiento requerimiento);
    public void delete(Integer id);
    public void update(Requerimiento requerimiento);
    public Requerimiento get(Integer id);
}
