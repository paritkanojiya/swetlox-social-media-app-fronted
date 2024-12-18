import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialValues = {
  user: {},
  isAuthenticated: false,
  loading: true,
};
const userSlice = createSlice({
  name: "userDetails",
  initialState: initialValues,
  reducers: {
    setUserDetails: (state, payload) => {
      state.user = payload.payload;
    },
    getUserDetails: (state) => {
      state.user;
    },
    setIsAuthenticated: (state, paayload) => {
      state.isAuthenticated = paayload;
    },
    getAuthenticated: (state) => {
      state.isAuthenticated;
    },
    setLoading: (state, payload) => {
      state.loading = payload.payload;
    },
    getLoading: (state) => {
      state.loading;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
