import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const deleteCategoryApi = createAsyncThunk(
    "deleteCategoryApi",
    async (body) => {
      const {id,mutate} = body
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        let token = user.data?.refreshToken;

        const response = await fetch(
          `${constants.baseUrl}api/category/${id}`,
          {
            method: "PUT",
            headers: {
                'Authorization':`Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        const result = await response.json();
          mutate()
        console.log("Delete Api of Category", result);
        return result;
      } catch (error) {
        console.log("Delete Api of Category", error.message);
      }
    }
  );
const deleteCategory = createSlice({
    name:"deleteService",
    initialState:{
        isLoading: false,
        isError: false,
        data: null,
        success: null,
        message: null,
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteCategoryApi.pending,(state)=>{
            state.isLoading = true
            state.data = null
        })
        builder.addCase(deleteCategoryApi.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.data = action?.payload;
            state.success = action?.payload?.success;
            state.message = action?.payload?.message;
        })
        builder.addCase(deleteCategoryApi.rejected, (state,action)=>{
            
            state.isError = true;
            state.data = action.payload;
            state.success = false;
            state.message = action.payload.message;
        })
    }
})

export default deleteCategory.reducer