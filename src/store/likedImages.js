import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLikedImages = createAsyncThunk(
  'likedImages/fetchLikedImages',
  async () => {
    return [];
  }
);

const likedImagesSlice = createSlice({
  name: 'likedImages',
  initialState: [],
  reducers: {
    likeImage: (state, action) => {
      const item = action.payload;
      if (!state.some(i => i.id === item.id)) {
        state.push(item);
      }
    },
    unlikeImage: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      return state.filter(i => i.id !== id);
    },
    clearLikes: () => [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLikedImages.fulfilled, (_state, action) => {
      return Array.isArray(action.payload) ? action.payload : [];
    });
  },
});

export const { likeImage, unlikeImage, clearLikes } = likedImagesSlice.actions;
export default likedImagesSlice.reducer;
