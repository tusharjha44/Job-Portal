package com.jobhook.repository;

import com.jobhook.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface OTPRepository
        extends MongoRepository<OTP, String>
{
    List<OTP> findByCreationTimeBefore(LocalDateTime expired);
}
