import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const getAllCategoriesApi = createAsyncThunk(
  "getAllCategoriesApi",
  async (paginate) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      let token = user.data?.refreshToken;

      const response = await fetch(
        `${constants.baseUrl}api/category?limit=${paginate.limit}&page=${paginate.page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let result = await response.json();
      return result;
    } catch (error) {
      console.log("error", error.message);
    }
  }
);

export const getAllCategoriesSlice = createSlice({
  name: "getAllCategoriesSlice",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    success: null,
    message: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesApi.pending, (state, action) => {
        state.isLoading = true;
        state.data = null;
      })
      .addCase(getAllCategoriesApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.message = action.payload.message;
        state.success = action.payload.success;
      })
      .addCase(getAllCategoriesApi.rejected, (state, action) => {
        state.isError = false;
      });
  },
});

export const selectCategory = (state) => state.getAllCategoriesSlice;

export default getAllCategoriesSlice.reducer;
