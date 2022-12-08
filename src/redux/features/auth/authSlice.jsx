import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
