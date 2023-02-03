import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCapsule: null,
  loading: false,
  error: null,
};

export const capsuleSlice = createSlice({
  name: "capsule",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentCapsule = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCapsule: (state) =>{
      state.currentCapsule = null;
      state.loading = false;
      state.error = null;
    }
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, clearCapsule } = capsuleSlice.actions;

export default capsuleSlice.reducer;
