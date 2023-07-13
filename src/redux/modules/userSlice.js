import { createSlice } from '@reduxjs/toolkit';

const initialState = { is: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.is = action.payload.is;
    },
  },
});

export default userSlice.reducer;
export const { loginUser } = userSlice.actions;
