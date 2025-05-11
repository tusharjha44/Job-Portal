import { updateProfile } from '@/services';
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    changeProfile: (state, action) => {
      state = updateProfile(action.payload);
      return action.payload;
    },
    setProfile: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setProfile, changeProfile } = profileSlice.actions;
export default profileSlice.reducer;
