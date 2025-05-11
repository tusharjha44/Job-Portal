package com.jobhook.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Certification
{
    private String name;
    private String issuer;
    private String issueDate;
    private String certificateId;
}
