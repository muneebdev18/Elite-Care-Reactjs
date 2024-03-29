import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const viewusers = createAsyncThunk("viewusers", async (id) => {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MzE1NzJiZjczMjE3YWZlYWYzZGIiLCJpYXQiOjE3MDkxMTI4MTAsImV4cCI6MTcwOTcxNzYxMH0.zK0fHyXlPXYhIjgB3AAJBWvIUbYyxqyDFOZJ977hHlw"
    let Url = await fetch(`http://localhost:8080/api/user/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded ", 'Authorization': `Bearer ${token}`, },
      body: JSON.stringify(),
    });

    let result = await Url.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
});

const ViewUsersSlice = createSlice({
  name: "viewusers",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewusers.pending, (state, action) => {

        state.loading = true;
      })
      .addCase(viewusers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(viewusers.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectuserview = (state) => state.viewusers;

export default ViewUsersSlice.reducer;
