package com.jobhook.api;

import com.jobhook.dto.LoginDto;
import com.jobhook.dto.UserDto;
import com.jobhook.exception.JobPortalException;
import com.jobhook.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/users")
public class UserApi
{

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody @Valid UserDto userDto)
            throws JobPortalException
    {
        userDto = userService.registerUser(userDto);
        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> loginUser(@RequestBody @Valid LoginDto loginDto)
            throws JobPortalException
    {
        return new ResponseEntity<>(userService.loginUser(loginDto), HttpStatus.OK);
    }
}
