package com.jobhook.service;

import com.jobhook.dto.LoginDto;
import com.jobhook.dto.UserDto;
import com.jobhook.exception.JobPortalException;

public interface UserService
{
    public UserDto registerUser(UserDto userDto)
            throws JobPortalException;

    public UserDto loginUser(LoginDto loginDto)
            throws JobPortalException;

    ;
}
