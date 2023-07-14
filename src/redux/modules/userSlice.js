import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/user';

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

const removeToken = () => {
  localStorage.removeItem('token');
};

export const __checkToken = createAsyncThunk(
  'checkToken',
  async (payload, thunkAPI) => {
    try {
      const curToken = getToken();
      if (curToken === null) return;
      const res = await api.get('/user', {
        headers: { Authorization: `Bearer ${curToken}` },
      });
      return thunkAPI.fulfillWithValue(res.status);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = { is: false, token: '', resMsg: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinUser: (state, action) => {
      const { is, token } = action.payload;
      setToken(token);
      state.is = is;
      state.token = token;
    },
    signoutUser: (state, action) => {
      removeToken();
      state.is = false;
      state.token = '';
      state.resMsg = '';
    },
  },
  extraReducers: {
    [__checkToken.pending]: (state, action) => {
      state.is = true;
      state.resMsg = '';
    },
    [__checkToken.fulfilled]: (state, action) => {
      if (action.payload === 200) {
        state.is = true;
        state.resMsg = '';
      } else {
        state.is = false;
        state.token = '';
        state.resMsg = '로그인이 필요합니다';
      }
    },
    [__checkToken.rejected]: (state, action) => {
      state.is = false;
      state.token = '';
      state.resMsg = '로그인이 필요합니다';
    },
  },
});

export default userSlice.reducer;
export const { signinUser, signoutUser, checkUser } = userSlice.actions;
