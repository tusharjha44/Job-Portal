package com.jobhook.repository;

import com.jobhook.entity.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository
        extends MongoRepository<Profile, Long>
{
}
