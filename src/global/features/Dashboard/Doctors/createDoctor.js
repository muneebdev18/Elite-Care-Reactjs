import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../../constants";


export const createDoctorApi = createAsyncThunk("createDoctorApi", async (body) => {

    const user = JSON.parse(localStorage.getItem('user'));
    let token = user.data?.refreshToken

    const formData = new FormData()
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('serviceOffered', body.serviceOffered);
    formData.append('availableTime', body.availableTime);
    formData.append('doctorImg', body.doctorImg);

    try {
        const response = await fetch(`${constants.baseUrl}api/doctor`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log("error in create Doctor", error.message)
        throw error;
    }
})
const createDoctor = createSlice({
    name: "createDoctor",
    initialState: {
        isLoading: false,
        isError: false,
        data: null,
        success: null,
        message: ''
    },
    reducers:{
        clearDoctor(){
            return{
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
            .addCase(createDoctorApi.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createDoctorApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action?.payload?.data
                state.success = action?.payload?.success
                state.message = action?.payload?.message
            })
            .addCase(createDoctorApi.rejected, (state, action) => {
                state.isError = true
                state.data = null
            })
    }
})
export const { clearDoctor } = createDoctor.actions
export default createDoctor.reducer