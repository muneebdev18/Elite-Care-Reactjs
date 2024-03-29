import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

export const updateBlogApi = createAsyncThunk(
  "updateBlogApi",
  async (body) => {
    const { id, blog } = body
    // Token from LocalStorage
    const user = JSON.parse(localStorage.getItem("user"));
    let token = user.data?.refreshToken;
    // Form data
    const formData = new FormData()
    formData.append("blogImg", body.blogImg);
    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("category", body.category);
    try {
      const response = await fetch(
        `${constants.baseUrl}api/blog/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,

          },
          body: formData
        }
      );
      const result = await response.json();
      console.log("Update Api of Service", result);
      return result;
    } catch (error) {
      console.log("Update Api of Service", error.message);
    }
  }
);
const updateBlog = createSlice({
  name: "updateBlog",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    success: null,
    message: null,
  },
  reducers: {
    clearUpdateBlog() {
      return {
        isLoading: false,
        isError: false,
        data: null,
        success: null,
        message: null
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateBlogApi.pending, (state) => {
        state.isLoading = true;
        state.data = null;
      })
      .addCase(updateBlogApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.success = action?.payload?.success
        state.message = action?.payload?.message
      })
      .addCase(updateBlogApi.rejected, (state) => {
        state.isError = true
        state.data = null
      })

  },
});
export const { clearUpdateBlog } = updateBlog.actions
export default updateBlog.reducer;
