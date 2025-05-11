package com.jobhook.entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "otp")
@NoArgsConstructor
@Data
@AllArgsConstructor
public class OTP
{
    @Id
    @Email(message = "{user.email.invalid}")
    private String email;

    @Pattern(regexp = "^[0-9]{6}$", message = "{otp.invalid}")
    private String otpCode;

    private LocalDateTime creationTime;
}
