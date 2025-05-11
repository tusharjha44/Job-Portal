package com.jobhook.service;

import com.jobhook.dto.LoginDto;
import com.jobhook.dto.ResponseDto;
import com.jobhook.dto.UserDto;
import com.jobhook.entity.OTP;
import com.jobhook.entity.User;
import com.jobhook.exception.JobPortalException;
import com.jobhook.repository.OTPRepository;
import com.jobhook.repository.UserRepository;
import com.jobhook.utility.Data;
import com.jobhook.utility.Utilities;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl
        implements UserService
{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public UserDto registerUser(UserDto userDto)
            throws JobPortalException
    {
        Optional<User> optional = userRepository.findByEmail(userDto.getEmail());
        if (optional.isPresent()) {
            throw new JobPortalException("USER_FOUND");
        }
        userDto.setProfileId(profileService.createProfile(userDto.getEmail()));
        userDto.setId(Utilities.getNextSequence("users"));
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User user = userDto.toEntity();
        userRepository.save(user);
        return user.toDTO();
    }

    @Override
    public UserDto loginUser(LoginDto loginDto)
            throws JobPortalException
    {
        User user = userRepository.findByEmail(loginDto.getEmail()).orElseThrow(() -> new JobPortalException(("USER_NOT_FOUND")));
        if (!passwordEncoder.matches(loginDto.getPassword(), user.getPassword())) {
            throw new JobPortalException("INVALID_CREDENTIALS");
        }
        return user.toDTO();
    }

    @Override
    public void sendOtp(String email)
            throws Exception
    {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new JobPortalException(("USER_NOT_FOUND")));
        MimeMessage mm = mailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mm, true);
        message.setTo(email);
        message.setSubject("Your OTP code");
        String generatedOtp = Utilities.generateOtp();
        OTP otp = new OTP(email, generatedOtp, LocalDateTime.now());
        otpRepository.save(otp);
        message.setText(Data.getOtpMessageBody(generatedOtp, user.getName()), true);
        mailSender.send(mm);
    }

    @Override
    public void verifyOtp(String email, String otp)
            throws JobPortalException
    {
        OTP otpEntity = otpRepository.findById(email).orElseThrow(() -> new JobPortalException("OTP_NOT_FOUND"));
        if (!otpEntity.getOtpCode().equals(otp)) {
            throw new JobPortalException("OTP_INCORRECT");
        }
    }

    @Override
    public ResponseDto changePassword(LoginDto loginDto)
            throws JobPortalException
    {
        User user = userRepository.findByEmail(loginDto.getEmail()).orElseThrow(() -> new JobPortalException(("USER_NOT_FOUND")));
        user.setPassword(passwordEncoder.encode(loginDto.getPassword()));
        userRepository.save(user);
        return new ResponseDto("Password changed Successfully");
    }

    @Scheduled(fixedRate = 60000)
    public void removeExpiredOTPs()
    {
        LocalDateTime expired = LocalDateTime.now().minusMinutes(5);
        List<OTP> expiredOTPs = otpRepository.findByCreationTimeBefore(expired);
        if (!expiredOTPs.isEmpty()) {
            otpRepository.deleteAll(expiredOTPs);
        }
    }
}
