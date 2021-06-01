package com.requerimiento.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.requerimiento.app.entities.Requerimiento;
import com.requerimiento.app.mappers.RequerimientoMapper;

@Service
public final class RequerimientoServiceImpl implements RequerimientoService {

	@Autowired
    private RequerimientoMapper requerimientoMapper;

    
	@Override
	public List<Requerimiento> list() {
		List<Requerimiento> list = requerimientoMapper.list();
        return list;
	}

	@Override
	public void insert(Requerimiento requerimiento) {
		requerimientoMapper.insert(requerimiento);		
	}

	@Override
	public void delete(Integer id) {
		requerimientoMapper.delete(id);
	}

	@Override
	public void update(Requerimiento requerimiento) {
		requerimientoMapper.update(requerimiento);		
	}

	@Override
	public Requerimiento get(Integer id) {
		Requerimiento entity = requerimientoMapper.get(id);
        return entity;		
	}

}
