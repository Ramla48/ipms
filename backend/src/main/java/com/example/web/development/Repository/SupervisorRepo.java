package com.example.web.development.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web.development.Model.Supervisor;

public interface SupervisorRepo extends JpaRepository<Supervisor, Long> {
    
}
