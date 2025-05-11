package com.jobhook.api;

import com.jobhook.dto.LoginDto;
import com.jobhook.dto.ResponseDto;
import com.jobhook.dto.UserDto;
import com.jobhook.entity.OTP;
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

    @PostMapping("/sendOtp")
    public ResponseEntity<ResponseDto> sendOtp(@RequestBody @Valid OTP otp)
            throws Exception
    {
        userService.sendOtp(otp.getEmail());
        return new ResponseEntity<>(new ResponseDto("OTP sent successfully!!"), HttpStatus.OK);
    }

    @PostMapping("/verifyOtp")
    public ResponseEntity<ResponseDto> verifyOtp(@RequestBody @Valid OTP otp)
            throws JobPortalException
    {
        userService.verifyOtp(otp.getEmail(), otp.getOtpCode());
        return new ResponseEntity<>(new ResponseDto("OTP has been verified!!!"), HttpStatus.OK);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<ResponseDto> changePassword(@RequestBody @Valid LoginDto loginDto)
            throws JobPortalException
    {
        return new ResponseEntity<>(userService.changePassword(loginDto), HttpStatus.OK);
    }
}
