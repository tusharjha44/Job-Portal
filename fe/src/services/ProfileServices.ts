import axios from 'axios';

const baseUrl = 'http://localhost:8080/profiles';

export const getProfile = async (userId: string) => {
  try {
    const res = await axios.get(`${baseUrl}/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (profile: any) => {
  try {
    const res = await axios.put(`${baseUrl}/update`, profile);
    return res.data;
  } catch (error) {
    throw error;
  }
};
