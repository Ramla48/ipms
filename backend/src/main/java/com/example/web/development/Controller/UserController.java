package com.example.web.development.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.development.Model.User;
import com.example.web.development.services.UserService;

import jakarta.servlet.http.HttpSession;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/login")
public class UserController {

    @Autowired
    private UserService userService;

    
    @PostMapping
    public ResponseEntity<Map<String, String>> userLogin(@RequestBody User user, HttpSession session){
        User foundedUser = userService.findUserByUsername(user.getUsername());
        Map<String, String> response = new HashMap<>();

        if (foundedUser == null) {
            response.put("message", "Username is not found");
            return  ResponseEntity.badRequest().body(response); 
        }

        if (foundedUser.getPassword().equals(user.getPassword())) {

            session.setAttribute("user", foundedUser);
            response.put("message", "login successfully");
            response.put("username", String.valueOf(foundedUser.getUsername()));
            response.put("role", String.valueOf(foundedUser.getRole()));
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "invalid user details");
            return ResponseEntity.badRequest().body(response);
        }
    }
    

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User userSaved = userService.createUser(user);
        return new  ResponseEntity<>(userSaved, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long user){
        userService.deleteuser(user);
        return new ResponseEntity<String>("User tear amesha futika ", HttpStatus.OK);
    }
}
