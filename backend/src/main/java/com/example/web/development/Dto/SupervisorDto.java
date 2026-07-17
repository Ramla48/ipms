package com.example.web.development.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SupervisorDto {

    private Long id;
    private String supervisorId;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String gender;
    private String officeName;
}
