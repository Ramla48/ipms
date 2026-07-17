package com.example.web.development.services;

import java.util.List;

import com.example.web.development.Dto.SupervisorDto;

public interface SupervisorService {
    SupervisorDto createSupervisor(SupervisorDto supervisorDto);

    SupervisorDto getSupervisorById(Long supervisorId);

    List<SupervisorDto> getAllSupervisors();

    SupervisorDto updateSupervisor(Long supervisorId, SupervisorDto updatedSupervisor);

    void deleteSupervisor(Long supervisorId);
}
