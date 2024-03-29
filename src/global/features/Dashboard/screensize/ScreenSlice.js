import { createSlice } from "@reduxjs/toolkit";

const ScreenSlice = createSlice({
  name: "screen",
  initialState: {
    screensize: window.innerWidth,
  },
  reducers: {
    screenSet: (state, action) => {
      state.screensize = action.payload
    },
  },
});
export const { screenSet } = ScreenSlice.actions;


export default ScreenSlice.reducer;
