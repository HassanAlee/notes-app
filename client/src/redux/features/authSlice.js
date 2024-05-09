import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions";
const initialState = {
  loading: false,
  error: "",
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default authSlice.reducer;
