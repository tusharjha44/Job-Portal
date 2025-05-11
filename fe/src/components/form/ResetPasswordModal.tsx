import { useEffect, useState } from 'react';

import { changePassword, sendOTP, verifyOTP } from '@/services';
import { showNotification } from '@/utils';
import { Button, Group, Modal, PasswordInput, Stack, TextInput } from '@mantine/core';
import { PinInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const ResetPasswordModal = ({ opened, onClose }: Props) => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let timer: any;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await sendOTP(email);
      setOtpSent(true);
      setResendTimer(60); // Start 60s countdown
      notifications.show({
        title: 'OTP Sent',
        message: 'Check your email for the OTP.',
        color: 'green',
      });
    } catch (err: any) {
      notifications.show({
        title: 'Error',
        message: err.response?.data?.message || 'Failed to send OTP',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      await verifyOTP(email, otpCode);
      setOtpVerified(true);
      showNotification('OTP Verified', 'You may now enter a new password.', 'green');
    } catch (err: any) {
      showNotification('Error', err.response?.data?.message || 'Invalid OTP', 'red');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    setLoading(true);
    try {
      await changePassword(email, newPassword);
      showNotification('Password Changed', 'Your password has been updated successfully.', 'green');
      onClose();
      setEmail('');
      setOtpCode('');
      setNewPassword('');
      setOtpSent(false);
      setOtpVerified(false);
      setResendTimer(0);
    } catch (err: any) {
      showNotification('Error', err.response?.data?.message || 'Failed to change password', 'red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Reset Password" centered>
      <Stack>
        {!otpSent && (
          <>
            <TextInput
              label="Email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              required
            />
            <Button onClick={handleSendOtp} loading={loading} color="brightSun.4">
              Send OTP
            </Button>
          </>
        )}

        {otpSent && !otpVerified && (
          <>
            <PinInput
              className="self-center"
              length={6}
              value={otpCode}
              onChange={setOtpCode}
              oneTimeCode
            />
            <Group className="flex flex-col justify-between self-center">
              <Button onClick={handleVerifyOtp} loading={loading} color="brightSun.4">
                Submit OTP
              </Button>

              {resendTimer > 0 ? (
                <Button variant="outline" disabled>
                  Resend in {resendTimer}s
                </Button>
              ) : (
                <Button variant="outline" onClick={handleSendOtp} loading={loading}>
                  Resend OTP
                </Button>
              )}
            </Group>
          </>
        )}

        {otpVerified && (
          <>
            <PasswordInput
              label="New Password"
              value={newPassword}
              onChange={e => setNewPassword(e.currentTarget.value)}
              required
            />
            <Button onClick={handleChangePassword} loading={loading} color="brightSun.4">
              Change Password
            </Button>
          </>
        )}
      </Stack>
    </Modal>
  );
};
