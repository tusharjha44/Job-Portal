package com.jobhook.service;

import com.jobhook.dto.UserDto;
import com.jobhook.entity.User;
import com.jobhook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl
        implements UserService
{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto registerUser(UserDto userDto)
    {
        User user = userDto.toEntity();
        userRepository.save(user);
        return user.toDTO();
    }
}
