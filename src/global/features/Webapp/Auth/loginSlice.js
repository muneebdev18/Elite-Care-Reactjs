import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

// Api Call
export const loginSliceApi = createAsyncThunk("loginSliceApi", async (body) => {
    try {
        const response = await fetch(`${constants.baseUrl}api/auth/login`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data))

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error(error);
    }
})

// Make a Slice

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        isLoading: false,
        isError: false,
        data: null,
        success: false,
        message: null,
        _id: null,
        name: null,
        email: null,
        profile: null,
        gender: null,
        appoinmentApproval: null,
        verified: null,
        role: null,
        isDeleted: null,
        refreshToken: null,
        errorMessage: null,
        errorTrue: null
    },
    reducers: {
        logout() {
            return {
                isLoading: false,
                isError: false,
                data: null,
                success: false,
                message: null,
                _id: null,
                name: null,
                email: null,
                profile: null,
                gender: null,
                appoinmentApproval: null,
                verified: null,
                role: null,
                isDeleted: null,
                refreshToken: null,
                errorMessage: null,
                errorTrue: null
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginSliceApi.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginSliceApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.success = action.payload.success
                state.message = action.payload.message
                state.data = action.payload.data
                state._id = action.payload.data?._id
                state.name = action.payload.data?.name
                state.email = action.payload.data?.email
                state.profile = action.payload.data?.profile
                state.gender = action.payload.data?.gender
                state.appoinmentApproval = action.payload.data?.appoinmentApproval
                state.verified = action.payload.data?.verified
                state.role = action.payload.data?.role
                state.isDeleted = action.payload.data?.isDeleted
                state.refreshToken = action.payload.data?.refreshToken
            })
            .addCase(loginSliceApi.rejected, (state, action) => {
                state.isError = true
                state.success = false
                state.errorTrue = false
                state.message = action?.error?.message
            })
    }
})

export const { logout } = loginSlice.actions;
export default loginSlice.reducer

