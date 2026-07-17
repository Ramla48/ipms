package com.example.web.development.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.web.development.Dto.StudentDto;
import com.example.web.development.Model.Student;
import com.example.web.development.Repository.StudentRepo;
import com.example.web.development.exception.ResourceNotFoundException;
import com.example.web.development.mapper.StudentMapper;
import com.example.web.development.services.StudentService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepo studentRepo;

    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent =  studentRepo.save(student);

        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public StudentDto getStudentById(Long studentId) {
       Student student =  studentRepo.findById(studentId)
       .orElseThrow(() -> new ResourceNotFoundException(" Student is not exist with given id. : "+ studentId));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
      List<Student> students =  studentRepo.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student)).collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
       Student student = studentRepo.findById(studentId)
        .orElseThrow(() -> new ResourceNotFoundException(" Student is not exist with given id : " + studentId));

        // update details from student

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());
        student.setInstituteName(updatedStudent.getInstituteName());
        student.setPhoneNumber(updatedStudent.getPhoneNumber());
        student.setRegNo(updatedStudent.getRegNo());

        Student updateStudentObj = studentRepo.save(student);

       return StudentMapper.mapToStudentDto(updateStudentObj);
    }

    @Override
    public void deleteStudent(Long studentId) {

        studentRepo.findById(studentId)
        .orElseThrow(() -> new ResourceNotFoundException(" Student is not exist with given id : " + studentId));

        studentRepo.deleteById(studentId);
    }

    @Override
    public Student findByRegNo(String regNo) {
        return studentRepo.findByRegNo(regNo);
    }

    @Override
    public Student updateByRegno(String regNo, Student updatedStudent) {
        Student student = studentRepo.findByRegNo(regNo);

        if (student == null) {
            throw new ResourceNotFoundException("Student not found with regNo: " + regNo);
        }

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());
        student.setPhoneNumber(updatedStudent.getPhoneNumber());

        Student updateStudentObj = studentRepo.save(student);

        return updateStudentObj;
    }
    
}
