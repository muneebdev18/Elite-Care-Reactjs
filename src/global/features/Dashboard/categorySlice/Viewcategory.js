import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

export const viewcategory = createAsyncThunk("viewcategory", async (id) => {
  try {

    const user = JSON.parse(localStorage.getItem('user'));
    let token = user.data?.refreshToken

    let Url = await fetch(`${constants.baseUrl}api/category/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded ", 'Authorization': `Bearer ${token}`, },
      // body: JSON.stringify(),
    });

    let result = await Url.json();
    console.log(result);
    return result;

  } catch (error) {
    console.log(error.message)

  }

});

export const ViewCategorySlice = createSlice({
  name: "viewcategory",
  initialState: {
    data: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewcategory.pending, (state, action) => {

        state.loading = true;
      })
      .addCase(viewcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(viewcategory.rejected, (state, action) => {
        state.loading = false;
      });
  },
});



export default ViewCategorySlice.reducer;
