import axios from 'axios';

const baseUrl = 'http://localhost:8080/users';

export const registerUser = async (user: any) => {
  try {
    const res = await axios.post(`${baseUrl}/register`, user);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (user: any) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, user);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const sendOTP = async (email: string) => {
  try {
    const res = await axios.post(`${baseUrl}/sendOtp`, { email }); // ✅ Send JSON
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOTP = async (email: string, otpCode: string) => {
  try {
    const res = await axios.post(`${baseUrl}/verifyOtp`, { email, otpCode });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (email: string, newPassword: string) => {
  try {
    const res = await axios.post(`${baseUrl}/changePassword`, { email, password: newPassword });
    return res.data;
  } catch (error) {
    throw error;
  }
};
