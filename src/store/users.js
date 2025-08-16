import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    userLoggedIn: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.userLoggedIn = true;
      state.userData = action.payload ?? null;
    },
    logout: (state) => {
      state.userLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
