package com.jobhook.service;

import com.jobhook.dto.LoginDto;
import com.jobhook.dto.ResponseDto;
import com.jobhook.dto.UserDto;
import com.jobhook.exception.JobPortalException;
import jakarta.validation.Valid;

public interface UserService
{
    public UserDto registerUser(UserDto userDto)
            throws JobPortalException;

    public UserDto loginUser(LoginDto loginDto)
            throws JobPortalException;

    public void sendOtp(String email)
            throws Exception;

    public void verifyOtp(String email, String otp)
            throws JobPortalException;

    public ResponseDto changePassword(@Valid LoginDto loginDto)
            throws JobPortalException;
}
