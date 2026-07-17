package com.example.web.development.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.development.Dto.SupervisorDto;
import com.example.web.development.services.SupervisorService;

import lombok.AllArgsConstructor;


@CrossOrigin("*")

@AllArgsConstructor
@RestController
@RequestMapping("/api/supervisor")
public class SupervisorController { 

    private SupervisorService supervisorService;

    // add supervsor
    @PostMapping
    public ResponseEntity<SupervisorDto> createSupervisor(@RequestBody SupervisorDto supervisorDto){
        SupervisorDto savedSupervior = supervisorService.createSupervisor(supervisorDto);
        return new ResponseEntity<>(savedSupervior, HttpStatus.CREATED);
    }

    //  fecth by id

    @GetMapping("{id}")
    public ResponseEntity<SupervisorDto> getSupervisorById(@PathVariable("id") Long supervisorId){
        SupervisorDto supervisorDto = supervisorService.getSupervisorById(supervisorId);
        return ResponseEntity.ok(supervisorDto);
    }

    //  get all supervisor

    @GetMapping
    public ResponseEntity<List<SupervisorDto>> getAllSupervisors(){
        List<SupervisorDto> supervisors = supervisorService.getAllSupervisors();
        return ResponseEntity.ok(supervisors);
    }

    //  update supervisor
    @PutMapping("{id}")
    public ResponseEntity<SupervisorDto> updateSupervisor(@PathVariable("id") Long supervisorId, @RequestBody SupervisorDto updateSupervisor ){
        SupervisorDto supervisorDto = supervisorService.updateSupervisor(supervisorId, updateSupervisor);
        return ResponseEntity.ok(supervisorDto);
    }

    //  delete supervisor 
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSupervisor(@PathVariable("id") Long supervisorId){
        supervisorService.deleteSupervisor(supervisorId);
        return ResponseEntity.ok("Supervisor deleted successfully.. !");
    }

}
