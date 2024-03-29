import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getblogs = createAsyncThunk("getblogs", async (paginate) => {
 const user  = JSON.parse( localStorage.getItem("user"));
  let Url = await fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/blog?limit=${paginate.limit}&page=${paginate.page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded ",
      // Authorization: `Bearer ${user.data.refreshToken}`,
    },

  });

  let result = await Url.json();
  // console.log(result);
  return result;
});

export const GetblogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getblogs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getblogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getblogs.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default GetblogsSlice.reducer;
