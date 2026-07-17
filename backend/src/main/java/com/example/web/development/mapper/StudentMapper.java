package com.example.web.development.mapper;

import com.example.web.development.Dto.StudentDto;
import com.example.web.development.Model.Student;

public class StudentMapper {
    
    public static StudentDto mapToStudentDto(Student student){
        return new StudentDto(
            student.getId(),
            student.getEmail(),
            student.getFirstName(),
            student.getInstituteName(),
            student.getLastName(),
            student.getPhoneNumber(),
            student.getRegNo()
            
        );
    }

    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
            studentDto.getId(),
            studentDto.getEmail(),
            studentDto.getFirstName(),
            studentDto.getInstituteName(),
            studentDto.getLastName(),
            studentDto.getPhoneNumber(),
            studentDto.getRegNo()
        );

    }
}
