package com.jobhook.service;

import com.jobhook.dto.LoginDto;
import com.jobhook.dto.UserDto;
import com.jobhook.entity.User;
import com.jobhook.exception.JobPortalException;
import com.jobhook.repository.UserRepository;
import com.jobhook.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl
        implements UserService
{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto registerUser(UserDto userDto)
            throws JobPortalException
    {
        Optional<User> optional = userRepository.findByEmail(userDto.getEmail());
        if(optional.isPresent()) throw new JobPortalException("USER_FOUND");
        userDto.setId(Utilities.getNextSequence("users"));
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User user = userDto.toEntity();
        userRepository.save(user);
        return user.toDTO();
    }

    @Override
    public UserDto loginUser(LoginDto loginDto)
            throws JobPortalException
    {
        User user = userRepository.findByEmail(loginDto.getEmail()).orElseThrow(() -> new JobPortalException(("USER_NOT_FOUND")));
        if(!passwordEncoder.matches(loginDto.getPassword(),user.getPassword())){
            throw new JobPortalException("INVALID_CREDENTIALS");
        }
        return user.toDTO();
    }
}
