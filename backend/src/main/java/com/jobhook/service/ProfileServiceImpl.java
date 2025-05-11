package com.jobhook.service;

import com.jobhook.dto.ProfileDto;
import com.jobhook.entity.Profile;
import com.jobhook.exception.JobPortalException;
import com.jobhook.repository.ProfileRepository;
import com.jobhook.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service("profileService")
public class ProfileServiceImpl
        implements ProfileService
{
    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Long createProfile(String email)
            throws JobPortalException
    {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperience(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profileRepository.save(profile);
        return profile.getId();
    }

    @Override
    public ProfileDto getProfile(Long id)
            throws JobPortalException
    {
        return profileRepository.findById(id).orElseThrow(() -> new JobPortalException("PROFILE_NOT_FOUND")).toDto();
    }

    @Override
    public ProfileDto updateProfile(ProfileDto profileDto)
            throws JobPortalException
    {
        profileRepository.findById(profileDto.getId()).orElseThrow(() -> new JobPortalException("PROFILE_NOT_FOUND"));
        profileRepository.save(profileDto.toEntity());
        return profileDto;
    }
}
