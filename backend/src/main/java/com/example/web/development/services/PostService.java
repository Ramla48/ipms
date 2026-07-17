package com.example.web.development.services;

import java.util.List;

import com.example.web.development.Dto.PostDto;

public interface PostService {
    
    PostDto createPost(PostDto postDto); 

    PostDto getPostById(Long postId);

    List<PostDto> getAllPosts();

    PostDto updatePost(Long postId, PostDto postDto); 

    void deletePost(Long postId);
}
