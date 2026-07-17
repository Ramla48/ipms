package com.example.web.development.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web.development.Model.Post;

public interface PostRepo extends JpaRepository<Post, Long> {
    
}
