import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const updateCategoryApi = createAsyncThunk(
    "updateCategoryApi",
    async (body) => {
      const {id,category} = body
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        let token = user.data?.refreshToken
        const response = await fetch(
          `${constants.baseUrl}/api/category/${id}`,
          {
            method: "PATCH",
            headers: {
                'Authorization':`Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
          }
        );
        const result = await response.json();
          // mutate()
        console.log("Update Api of Cateogry", result);
        return result;
      } catch (error) {
        console.log("Update Api of Cateogry", error.message);
      }
    }
  );
const updateCategory = createSlice({
    name:"updateCategory",
    initialState:{
        isLoading: false,
        isError: false,
        data: null,
        success: null,
        message: null,
    },
    reducers:{
      clearUpdateCategory(){
        return{
            isLoading: false,
            isError: false,
            data: null,
            success: null,
            message: null
        }
      }
    },
    extraReducers:(builder)=>{
        builder.addCase(updateCategoryApi.pending,(state)=>{
            state.isLoading = true
            state.data = null
        })
        builder.addCase(updateCategoryApi.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.data = action?.payload;
            state.success = action?.payload?.success;
            state.message = action?.payload?.message;
        })
        builder.addCase(updateCategoryApi.rejected, (state,action)=>{
            
            state.isError = true;
            state.data = action.payload;
            state.success = action.payload.success;
            state.message = action.payload.message;
        })
    }
})
export const {clearUpdateCategory} = updateCategory.actions
export default updateCategory.reducer