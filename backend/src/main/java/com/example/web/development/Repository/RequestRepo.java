package com.example.web.development.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web.development.Model.Request;

public interface RequestRepo  extends JpaRepository<Request, Long>{
    List<Request>findByStudentIdAndStatus(String studentId, String status);

}
