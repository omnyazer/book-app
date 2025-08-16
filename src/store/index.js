import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users';
import likedImagesReducer from './likedImages';

const store = configureStore({
  reducer: {
    user: userReducer,
    likedImages: likedImagesReducer,
  },
});

export default store;
