package com.example.web.development.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web.development.Model.User;
import com.example.web.development.Repository.UserRepo;

@Service
public class UserService {
 
    @Autowired
    private UserRepo userRepo;

    public User findUserByUsername(String username){
        return userRepo.findByUsername(username);
    }

    public User createUser(User user){
        return userRepo.save(user);
    }

    public void deleteuser(Long user){
        userRepo.deleteById(user);
    } 

}
