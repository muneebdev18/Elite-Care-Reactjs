import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Viewcontact = createAsyncThunk("viewContact", async (id) => {

  const user = JSON.parse(localStorage.getItem('user'));
  let token = user.data?.refreshToken

  let Url = await fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/contactus/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded ", 'Authorization': `Bearer ${token}`, },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  // console.log(result);
  return result;
});

const ViewContactSlice = createSlice({
  name: "viewcontactus",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Viewcontact.pending, (state, action) => {

        state.loading = true;
      })
      .addCase(Viewcontact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(Viewcontact.rejected, (state, action) => {
        state.loading = false;
      });
  },
});


export default ViewContactSlice.reducer;
