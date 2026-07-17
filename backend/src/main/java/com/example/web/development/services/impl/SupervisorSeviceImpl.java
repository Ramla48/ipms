package com.example.web.development.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.web.development.Dto.SupervisorDto;

import com.example.web.development.Model.Supervisor;
import com.example.web.development.Repository.SupervisorRepo;
import com.example.web.development.exception.ResourceNotFoundException;
import com.example.web.development.mapper.SupervisorMapper;
import com.example.web.development.services.SupervisorService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class SupervisorSeviceImpl implements SupervisorService {

    private SupervisorRepo supervisorRepo;

    @Override
    public SupervisorDto createSupervisor(SupervisorDto supervisorDto) {
        Supervisor supervisor = SupervisorMapper.mapToSupervisor(supervisorDto);
        Supervisor savedSupervisor = supervisorRepo.save(supervisor);

        return SupervisorMapper.mapToSupervisorDto(savedSupervisor);
    }

    @Override
    public SupervisorDto getSupervisorById(Long supervisorId) {

        Supervisor supervisor = supervisorRepo.findById(supervisorId)
        .orElseThrow(() -> new ResourceNotFoundException(" Supervisor is not exist with given id. : "+ supervisorId));
        return SupervisorMapper.mapToSupervisorDto(supervisor);
    }

    @Override
    public List<SupervisorDto> getAllSupervisors() {
        List<Supervisor> supervisors = supervisorRepo.findAll();
        return supervisors.stream().map((supervisor) -> SupervisorMapper.mapToSupervisorDto(supervisor)).collect(Collectors.toList());
    }

    @Override
    public SupervisorDto updateSupervisor(Long supervisorId, SupervisorDto updatedSupervisor) {
        Supervisor supervisor = supervisorRepo.findById(supervisorId)
        .orElseThrow(() -> new ResourceNotFoundException(" Supervisor is not exist with given id. : "+ supervisorId));

        //  update supervisor data
        supervisor.setFirstName(updatedSupervisor.getFirstName());
        supervisor.setGender(updatedSupervisor.getGender());
        supervisor.setLastName(updatedSupervisor.getLastName());
        supervisor.setPhoneNumber(updatedSupervisor.getPhoneNumber());
        supervisor.setOfficeName(updatedSupervisor.getOfficeName());
        supervisor.setSupervisorId(updatedSupervisor.getSupervisorId());

        Supervisor updateSupervisorObj = supervisorRepo.save(supervisor);
        return SupervisorMapper.mapToSupervisorDto(updateSupervisorObj);
    }

    @Override
    public void deleteSupervisor(Long supervisorId) {
        supervisorRepo.findById(supervisorId)
        .orElseThrow(() -> new ResourceNotFoundException(" Supervisor is not exist with given id : " + supervisorId));

        supervisorRepo.deleteById(supervisorId);
    }
    
}
