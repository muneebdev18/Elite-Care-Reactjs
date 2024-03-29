import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const deleteServiceApi = createAsyncThunk(
    "deleteServiceApi",
    async (body) => {
      const {id,mutate} = body
      try {

        const response = await fetch(
          `${constants.baseUrl}/api/services/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        const result = await response.json();
          mutate()
        console.log("Delete Api of Service", result);
        return result;
      } catch (error) {
        console.log("Delete Api of Service", error.message);
      }
    }
  );
const deleteService = createSlice({
    name:"deleteService",
    initialState:{
        isLoading: false,
        isError: false,
        data: null,
        success: null,
        message: null,
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteServiceApi.pending,(state)=>{
            state.isLoading = true
            state.data = null
        })
        builder.addCase(deleteServiceApi.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.data = action?.payload;
            state.success = action?.payload?.success;
            state.message = action?.payload?.message;
        })
        builder.addCase(deleteServiceApi.rejected, (state,action)=>{
            
            state.isError = true;
            state.data = action.payload;
            state.success = false;
            state.message = action.payload.message;
        })
    }
})

export default deleteService.reducer