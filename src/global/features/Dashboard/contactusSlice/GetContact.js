import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getcontact = createAsyncThunk("getcontact", async () => {

  const user = JSON.parse(localStorage.getItem('user'));
  let token = user.data?.refreshToken

  let Url = await fetch("https://flutterapi.testdevlink.net/elite-care-db/api/contactus", {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded ", 'Authorization': `Bearer ${token}`, },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  // console.log(result);
  return result;
});

const GetSContactSlice = createSlice({
  name: "contactus",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getcontact.pending, (state, action) => {

        state.loading = true;
      })
      .addCase(getcontact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getcontact.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// export const selectcontact = (state) => state.contactus;

export default GetSContactSlice.reducer;
