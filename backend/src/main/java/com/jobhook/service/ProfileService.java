package com.jobhook.service;

import com.jobhook.dto.ProfileDto;
import com.jobhook.exception.JobPortalException;

public interface ProfileService
{
    public Long createProfile(String email)
            throws JobPortalException;

    public ProfileDto getProfile(Long id)
            throws JobPortalException;

    public ProfileDto updateProfile(ProfileDto profileDto)
            throws JobPortalException;
}
