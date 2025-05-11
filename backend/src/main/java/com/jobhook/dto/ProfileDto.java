package com.jobhook.dto;

import com.jobhook.entity.Profile;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDto
{
    private Long id;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private List<String> skills;
    private List<Experience> experience;
    private List<Certification> certifications;

    public Profile toEntity()
    {
        return new Profile(this.id, this.email, this.jobTitle, this.company, this.location, this.about, this.skills, this.experience, this.certifications);
    }
}
