package com.example.web.development.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web.development.Model.Request;
import com.example.web.development.Repository.RequestRepo;

@Service
public class RequestService {

    @Autowired
    private RequestRepo requestRepo;

    public Request creaRequest(Request request){
        return requestRepo.save(request);
    }

    public Request getRequestById(Long request){
        Optional<Request> requestId  = requestRepo.findById(request);
        return requestId.get();
    }

    public List<Request> getAllRequests(){
        return requestRepo.findAll();
    }

    public List<Request>findPendingRequestsByStudentId(String studentId) {
        return requestRepo.findByStudentIdAndStatus(studentId, "Pending");
    }

    public void deleteRequest(Long request){
        requestRepo.deleteById(request);
    }

    public Request updateRequest(Long requestId, Request request){
        Request oldRequest = requestRepo.findById(requestId).orElseThrow(null);
        oldRequest.setPostId(request.getPostId());
        oldRequest.setStudentId(request.getStudentId());
        oldRequest.setStartDate(request.getStartDate());
        oldRequest.setEndDate(request.getEndDate());
        oldRequest.setStatus(request.getStatus());

        Request updatedRequest= requestRepo.save(oldRequest);
        return updatedRequest;
    }
    
}
