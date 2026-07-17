package com.example.web.development.Dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {

    private Long id;
    private String email;
    private String instituteName;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String regNo;
}
