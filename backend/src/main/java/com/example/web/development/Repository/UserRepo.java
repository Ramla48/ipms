package com.example.web.development.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web.development.Model.User;

public interface UserRepo  extends JpaRepository<User, Long>{
    User findByUsername(String username);
}
