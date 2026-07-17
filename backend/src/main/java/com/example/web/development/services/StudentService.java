package com.example.web.development.services;


import java.util.List;

import com.example.web.development.Dto.StudentDto;
import com.example.web.development.Model.Student;

public interface StudentService {

    StudentDto createStudent(StudentDto studentDto);

    StudentDto getStudentById(Long studentId);

    List<StudentDto> getAllStudents();

    StudentDto updateStudent(Long studentId, StudentDto updatedStudent);

    Student findByRegNo(String regNo);

    Student updateByRegno(String regNo, Student updaStudent);



    void deleteStudent(Long studentId); 
} 
