import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getusers = createAsyncThunk("getusers", async () => {
  try {
    const token = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MzE1NzJiZjczMjE3YWZlYWYzZGIiLCJpYXQiOjE3MDkxMTI4MTAsImV4cCI6MTcwOTcxNzYxMH0.zK0fHyXlPXYhIjgB3AAJBWvIUbYyxqyDFOZJ977hHlw"
  let Url = await fetch("http://localhost:8080/api/user", {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded " ,   'Authorization':`Bearer ${token}`, },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  return result;
  } catch (error) {
    console.log(error.message);
  }
});

export const GetUsersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getusers.pending, (state, action) => {

        state.loading = true;
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getusers.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectusers = (state) => state.users;

export default GetUsersSlice.reducer;
