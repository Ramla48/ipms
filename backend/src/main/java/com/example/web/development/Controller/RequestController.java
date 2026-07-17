package com.example.web.development.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.development.Model.Request;
import com.example.web.development.services.RequestService;


@CrossOrigin("*")

@RestController
@RequestMapping("/api/request")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @PostMapping
    public ResponseEntity<Request> createRequest(@RequestBody Request request){
        Request savedrequest = requestService.creaRequest(request);
        return new ResponseEntity<>(savedrequest, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Request>> getAllRequests(){
        List<Request> requests = requestService.getAllRequests();
        return new ResponseEntity<>(requests, HttpStatus.OK);
    }

     @GetMapping("/{id}")
    public ResponseEntity<Request> getRequestById(@PathVariable("id") Long requestId){
        Request request = requestService.getRequestById(requestId);
        return new ResponseEntity<>(request, HttpStatus.OK);
    }

     @GetMapping("/pending")
    public List<Request> getPendingRequestsForStudent(@RequestParam("studentId") String studentId) {
        return requestService.findPendingRequestsByStudentId(studentId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRequest(@PathVariable("id") Long request){
        requestService.deleteRequest(request);
        return new ResponseEntity<String>("Request tear amesha futika ", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Request> updateUser(@PathVariable("id") Long requestId, @RequestBody Request request){

        Request updatedRequest = requestService.updateRequest(requestId, request);
        return new ResponseEntity<>(updatedRequest, HttpStatus.OK);

    } 
    
}
