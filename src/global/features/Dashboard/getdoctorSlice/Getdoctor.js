import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {constants} from '../../../constants'

export const getdoctors = createAsyncThunk("doctors/getdoctors", async (paginate) => {
  let Url = await fetch(`${constants.baseUrl}api/doctor?limit=10&page=${paginate.page}`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  //   console.log(result);
  return result;
});

export const GetdoctorSlice = createSlice({
  name: "doctors",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getdoctors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getdoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getdoctors.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectdoctor = (state) => state.doctors;

export default GetdoctorSlice.reducer;
