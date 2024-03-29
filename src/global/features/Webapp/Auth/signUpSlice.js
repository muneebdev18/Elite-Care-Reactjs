import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const signUpApi = createAsyncThunk('signUpApi', async (body) => {
    try {
        const response = await fetch(`${constants.baseUrl}api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const result = await response.json()
        console.log("Result of Signup Api");
        return result
    } catch (error) {
        console.log("Error of Signup Api", error.message)
    }
})

const signUpSlice = createSlice({
    name: 'signUpSlice',
    initialState: {
        isLoading: false,
        isError: false,
        data: null,
        Success: null,
        Message: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpApi.pending, (state) => {
                state.isLoading = true
                state.data = null
            })
            .addCase(signUpApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.data
                state.isError = false
                state.Success = action.payload.success
                state.Message = action.payload.message
            })
            .addCase(signUpApi.rejected, (state) => {
                state.isError = true
            })
    }
})

export default signUpSlice.reducer