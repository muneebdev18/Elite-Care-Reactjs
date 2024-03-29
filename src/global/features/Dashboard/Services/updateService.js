import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

export const updateServiceApi = createAsyncThunk(
  "updateServiceApi",
  async (body) => {
    const { id } = body
    const user = JSON.parse(localStorage.getItem("user"));
    let token = user.data?.refreshToken;
    // Form data 

    const formData = new FormData()
    formData.append("serviceName", body.serviceName)
    formData.append('description', body.description);
    formData.append('serviceImg', body.serviceImg);
    formData.append('price', body.price);
    formData.append('pageName', body.pageName);
    try {

      const response = await fetch(
        `${constants.baseUrl}/api/services/${id}`,
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
const updateService = createSlice({
  name: "updateService",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    success: null,
    message: null,
  },
  reducers: {
    clearUpdateService() {
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
      .addCase(updateServiceApi.pending, (state) => {
        state.isLoading = true;
        state.data = null;
      })
      .addCase(updateServiceApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.success = action?.payload?.success
        state.message = action?.payload?.message
      })
      .addCase(updateServiceApi.rejected, (state) => {
        state.isError = true
        state.data = null
      })

  },
});
export const { clearUpdateService } = updateService.actions
export default updateService.reducer;
