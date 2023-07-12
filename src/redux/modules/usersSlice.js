import { createSlice } from "@reduxjs/toolkit"

const initialState = {

}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserInfo: () => {

    },
    loginUser: () => {

    },
    logoutUser: () => {

    }
  }
})

export default usersSlice.reducer;
export const { getUserInfo, loginUser, logoutUser } = usersSlice.actions;