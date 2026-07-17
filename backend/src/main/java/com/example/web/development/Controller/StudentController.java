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

import com.example.web.development.Dto.StudentDto;
import com.example.web.development.Model.Student;
import com.example.web.development.services.StudentService;

import lombok.AllArgsConstructor;

//  kwaa jili ya kuruhusu port 8080 kutuma data kwenye port ya react 3000
@CrossOrigin("*") // weka mwishoni 

@AllArgsConstructor
@RestController
@RequestMapping("/api/student")
public class StudentController {

    private StudentService studentService;

    // Build add student rest API

    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
       StudentDto savedStudent =  studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    // Build get student REST API

    @GetMapping("{id}")
    public ResponseEntity<StudentDto>getStudentById(@PathVariable("id") Long studentId){
       StudentDto studentDto = studentService.getStudentById(studentId);
       return ResponseEntity.ok(studentDto);
    }

    // Build get all students REST API

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents(){
      List<StudentDto> students =  studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    // Build update student REST API 

    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateEmployee(@PathVariable("id") Long studentId, @RequestBody StudentDto updateStudent){
        // @PathVariable ->  bind path id into student id 

        // @RequestBody -> extract json format to java format

       StudentDto studentDto = studentService.updateStudent(studentId, updateStudent);
        return ResponseEntity.ok(studentDto);
    }

    // Build delete student REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student deleted successfully..! ");
    }


    // find by regNo
    @GetMapping("/regno/{id}")
    public ResponseEntity<Student> getByRegNo(@PathVariable("id") String regNo){
        Student student = studentService.findByRegNo(regNo);
        return ResponseEntity.ok(student);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") String regNo, @RequestBody Student updateStudent){

       Student student = studentService.updateByRegno(regNo, updateStudent);
        return ResponseEntity.ok(student);
    }
    
}
