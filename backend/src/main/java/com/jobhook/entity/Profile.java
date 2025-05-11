package com.jobhook.entity;

import com.jobhook.dto.Certification;
import com.jobhook.dto.Experience;
import com.jobhook.dto.ProfileDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "profiles")
public class Profile
{
    @Id
    private Long id;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private List<String> skills;
    private List<Experience> experience;
    private List<Certification> certifications;

    public ProfileDto toDto()
    {
        return new ProfileDto(this.id, this.email, this.jobTitle, this.company, this.location, this.about, this.skills, this.experience, this.certifications);
    }
}
