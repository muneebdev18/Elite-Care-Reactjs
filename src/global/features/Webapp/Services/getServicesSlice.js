import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getServicesApi = createAsyncThunk("getServicesApi", async () => {
    const baseUrl = `http://localhost:8080/api/services`
    const response = await fetch(baseUrl)
    const result = await response.json()
    return result
})

const getServices = createSlice({
    name: "getServices",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getServicesApi.pending, (state) => {
            state.isLoading = true
            state.data = null
        })
        builder.addCase(getServicesApi.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(getServicesApi.rejected, (state) => {
            state.isError = true
        })
    }
})

export default getServices.reducer