package com.jobhook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class JobHookApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobHookApplication.class, args);
	}

}
