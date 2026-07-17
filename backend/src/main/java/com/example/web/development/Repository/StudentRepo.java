package com.example.web.development.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web.development.Model.Student;

public interface StudentRepo extends JpaRepository<Student, Long> {
    Student findByRegNo(String regNo);
}
