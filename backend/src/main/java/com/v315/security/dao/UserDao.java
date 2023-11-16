package com.v315.security.dao;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.v315.security.model.User;

@Mapper
public interface UserDao {

    Optional<User> findByUsername(String username);
    
    void save(User user);
}
