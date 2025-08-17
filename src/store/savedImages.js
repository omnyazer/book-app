import { createSlice } from '@reduxjs/toolkit';

const savedImagesSlice = createSlice({
  name: 'savedImages',
  initialState: [],
  reducers: {
    saveImage: (state, action) => {
      const item = action.payload; 
      if (!state.some((i) => String(i.id) === String(item.id))) {
        state.push(item);
      }
    },
    unsaveImage: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      return state.filter((i) => String(i.id) !== String(id));
    },
    clearSaved: () => [],
  },
});

export const { saveImage, unsaveImage, clearSaved } = savedImagesSlice.actions;
export default savedImagesSlice.reducer;
