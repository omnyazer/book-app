import { configureStore } from '@reduxjs/toolkit';
import likedImagesReducer from './likedImages';
import savedImagesReducer from './savedImages'; 

const store = configureStore({
  reducer: {
    likedImages: likedImagesReducer,
    savedImages: savedImagesReducer, 
  },
});

export default store;
export { store };
