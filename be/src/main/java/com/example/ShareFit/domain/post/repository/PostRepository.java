package com.example.ShareFit.domain.post.repository;

import com.example.ShareFit.domain.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
