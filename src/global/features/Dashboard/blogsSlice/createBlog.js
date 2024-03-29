import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

export const createBlogApi = createAsyncThunk("createBlogApi", async (body) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let token = user.data?.refreshToken;
  console.log(body.title);
  const formData = new FormData();
  formData.append("blogImg", body.blogImg);
  formData.append("title", body.title);
  formData.append("description", body.description);
  formData.append("category", body.category);
  try {
    const response = await fetch(`${constants.baseUrl}api/blog`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData,
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("error in create Blog", error.message);
  }
});
const createBlog = createSlice({
  name: "createBlog",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    success: null,
    message: null,
  },
  reducers:{
    clearBlog(){
      return{
          isLoading: false,
          isError: false,
          data: null,
          message: null,
          success: null
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlogApi.pending, (state, action) => {
        state.isLoading = true;
        state.data = null;
        state.message = null;
        state.success = null;
      })
      .addCase(createBlogApi.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.message = action.payload?.message;
        state.success = action.payload?.success;
      })
      .addCase(createBlogApi.rejected, (state) => {
        state.isError = true;
        state.data = null;
        state.message = null;
        state.success = null;
      });
  },
});
export const { clearBlog } = createBlog.actions
export default createBlog.reducer;
