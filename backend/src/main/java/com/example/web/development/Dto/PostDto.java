package com.example.web.development.Dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {

    private Long id;
    private String position;
    private int amount;
    private String description;
    private String officeName;
    private LocalDate postDate;
}
