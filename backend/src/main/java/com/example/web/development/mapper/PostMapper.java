package com.example.web.development.mapper;

import com.example.web.development.Dto.PostDto;
import com.example.web.development.Model.Post;

public class PostMapper {
    
    public static PostDto mapToPostDto(Post post){
        return new PostDto(
            post.getId(),
            post.getPosition(),
            post.getAmount(),
            post.getDescription(),
            post.getOfficeName(),
            post.getPostDate() 
        );
    } 

    public static Post mapToPost(PostDto postDto){
        return new Post(
            postDto.getId(),
            postDto.getPosition(),
            postDto.getAmount(),
            postDto.getDescription(),
            postDto.getOfficeName(),
            postDto.getPostDate()
        );
    }
}
