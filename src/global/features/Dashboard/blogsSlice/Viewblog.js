import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Viewblog = createAsyncThunk("Viewblog", async (id) => {
  let Url = await fetch(
    `https://flutterapi.testdevlink.net/elite-care-db/api/blog/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded ",
      },
      body: JSON.stringify(),
    }
  );

  let result = await Url.json();
  console.log(result);
  return result;
});

export const ViewblogsSlice = createSlice({
  name: "viewblogs",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Viewblog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Viewblog.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(Viewblog.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default ViewblogsSlice.reducer;
