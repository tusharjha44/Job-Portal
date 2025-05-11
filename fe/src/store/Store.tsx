import { configureStore } from '@reduxjs/toolkit';

import { profileReducer, userReducer } from './slices';

export default configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});
