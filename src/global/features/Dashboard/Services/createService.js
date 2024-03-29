import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

export const createServiceApi = createAsyncThunk("createServiceApi", async (body) => {
    const user = JSON.parse(localStorage.getItem('user'));
    let token = user.data?.refreshToken

    console.log(token, "body", body);
    const formData = new FormData()
    formData.append('serviceName', body.serviceName);
    formData.append('description', body.description);
    formData.append('serviceImg', body.serviceImg);
    formData.append('price', body.price);
    formData.append('pageName', body.pageName);
    try {
        const response = await fetch(`${constants.baseUrl}api/services`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        const result = await response.json();
        console.log("resultsssssssssss", result)
        return result;

    } catch (error) {
        console.log("error in create Service", error.message)
        throw error;
    }

})

const createService = createSlice({
    name: "createService",
    initialState: {
        isLoading: false,
        isError: false,
        data: null,
        message: null,
        success: null
    },
    reducers: {
        clearService() {
            return {
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
            .addCase(createServiceApi.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createServiceApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.message = action.payload.message
                state.success = action.payload.success
            })
            .addCase(createServiceApi.rejected, (state, action) => {
                state.isError = true
                state.data = null
            })
    }
})
export const { clearService } = createService.actions
export default createService.reducer