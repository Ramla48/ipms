package com.example.web.development.mapper;

import com.example.web.development.Dto.SupervisorDto;
import com.example.web.development.Model.Supervisor;

public class SupervisorMapper {
    
    public static SupervisorDto mapToSupervisorDto(Supervisor supervisor){
        return new SupervisorDto(
            supervisor.getId(),
            supervisor.getSupervisorId(),
            supervisor.getFirstName(),
            supervisor.getLastName(),
            supervisor.getPhoneNumber(),
            supervisor.getGender(),
            supervisor.getOfficeName()
        );
    }

    public static Supervisor mapToSupervisor(SupervisorDto supervisorDto){
        return new Supervisor(
            supervisorDto.getId(),
            supervisorDto.getSupervisorId(),
            supervisorDto.getFirstName(),
            supervisorDto.getLastName(),
            supervisorDto.getPhoneNumber(),
            supervisorDto.getGender(),
            supervisorDto.getOfficeName()
        );
    }
}
