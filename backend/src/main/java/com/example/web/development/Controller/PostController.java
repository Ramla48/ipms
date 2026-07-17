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

import com.example.web.development.Dto.PostDto;
import com.example.web.development.services.PostService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")

@AllArgsConstructor
@RestController
@RequestMapping("/api/post") 
public class PostController {

    private PostService postService;

    // Build add post REST API 

    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto){

        PostDto savedPost = postService.createPost(postDto);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }

    //  fetch post by id

    @GetMapping("{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable("id")  Long postId){
        PostDto postDto = postService.getPostById(postId);
        return ResponseEntity.ok(postDto);
    }

    // fetch all posts

    @GetMapping
    public ResponseEntity<List<PostDto>> getAllPosts(){
        List<PostDto> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    //  update post
    @PutMapping("{id}")
    public ResponseEntity<PostDto> updatePost(@PathVariable("id") Long postId, @RequestBody PostDto updatedPost){
        PostDto postDto = postService.updatePost(postId, updatedPost);
        return ResponseEntity.ok(postDto);
    }

    //  delete post
    @DeleteMapping("{id}")
        public ResponseEntity<String> deletePost(@PathVariable("id") Long postId){
            postService.deletePost(postId);
            return ResponseEntity.ok("Post deleted successfully,. ");
        }
} 
