package com.jobhook.api;

import com.jobhook.dto.ProfileDto;
import com.jobhook.exception.JobPortalException;
import com.jobhook.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/profiles")
public class ProfileApi
{
    @Autowired
    private ProfileService profileService;

    @GetMapping("/{id}")
    public ResponseEntity<ProfileDto> getProfile(@PathVariable Long id)
            throws JobPortalException
    {
        return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ProfileDto> updateProfile(@RequestBody ProfileDto profileDto)
            throws JobPortalException
    {
        return new ResponseEntity<>(profileService.updateProfile(profileDto), HttpStatus.OK);
    }
}
