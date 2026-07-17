package com.example.web.development.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.web.development.Dto.PostDto;
import com.example.web.development.Model.Post;
import com.example.web.development.Repository.PostRepo;
import com.example.web.development.exception.ResourceNotFoundException;
import com.example.web.development.mapper.PostMapper;
import com.example.web.development.services.PostService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private PostRepo postRepo;

    @Override
    public PostDto createPost(PostDto postDto) {
        Post post = PostMapper.mapToPost(postDto);
        Post postSaved = postRepo.save(post);
        return PostMapper.mapToPostDto(postSaved);
    }

    @Override
    public PostDto getPostById(Long postId) {
        Post post = postRepo.findById(postId).orElseThrow(() -> new ResourceNotFoundException(" Post is not exist with given id. : "+ postId));
        return PostMapper.mapToPostDto(post);
    }

    @Override
    public List<PostDto> getAllPosts() {
        List<Post> posts = postRepo.findAll();
        return posts.stream().map((post) -> PostMapper.mapToPostDto(post)).collect(Collectors.toList());
    }

    @Override
    public PostDto updatePost(Long postId, PostDto updatedPost) {
        Post post = postRepo.findById(postId).orElseThrow(() -> new ResourceNotFoundException(" Post is not exist with given id. : "+ postId));

        post.setAmount(updatedPost.getAmount());
        post.setDescription(updatedPost.getDescription());
        post.setOfficeName(updatedPost.getOfficeName());
        post.setPosition(updatedPost.getPosition());

        Post updatePostObj = postRepo.save(post);
        return PostMapper.mapToPostDto(updatePostObj);
    }

    @Override
    public void deletePost(Long postId) {
        postRepo.findById(postId).orElseThrow(() -> new ResourceNotFoundException(" Post is not exist with given id. : "+ postId));

        postRepo.deleteById(postId);
    }
    
}
