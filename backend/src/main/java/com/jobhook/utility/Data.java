package com.jobhook.utility;

public class Data
{
    public static String getOtpMessageBody(String otp, String username)
    {
        return "<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "  <meta charset=\"UTF-8\">\n" +
                "  <title>OTP Verification</title>\n" +
                "</head>\n" +
                "<body style=\"font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;\">\n" +
                "  <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n" +
                "    <tr>\n" +
                "      <td align=\"center\">\n" +
                "        <table width=\"600\" cellpadding=\"20\" cellspacing=\"0\" style=\"background-color: #ffffff; margin-top: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);\">\n" +
                "          <tr>\n" +
                "            <td align=\"center\" style=\"background-color: #4CAF50; color: white; border-top-left-radius: 8px; border-top-right-radius: 8px;\">\n" +
                "              <h2>JobHook</h2>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "          <tr>\n" +
                "            <td>\n" +
                "              <h3>Hello, " + username + ",</h3>\n" +
                "              <p>We received a request to verify your email address. Please use the following One-Time Password (OTP) to complete the process:</p>\n" +
                "              <p style=\"font-size: 24px; font-weight: bold; color: #4CAF50; text-align: center;\">" + otp + "</p>\n" +
                "              <p>This OTP is valid for the next 10 minutes. Do not share it with anyone.</p>\n" +
                "              <p>If you didn't request this, you can safely ignore this email.</p>\n" +
                "              <br>\n" +
                "              <p>Thank you,<br>The JobHook Team</p>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "          <tr>\n" +
                "            <td align=\"center\" style=\"font-size: 12px; color: #777;\">\n" +
                "              <p>&copy; 2025 JobHook. All rights reserved.</p>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </table>\n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </table>\n" +
                "</body>\n" +
                "</html>\n";
    }
}
