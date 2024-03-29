import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants"; 
export const createAppointmentApi = createAsyncThunk("createAppointmentApi",async(body)=>{
    try {
        const response = await fetch(`${constants.baseUrl}api/appoinment`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        const result = await response.json()
        console.log("Create Book Appointment",result)
        return result
    } catch (error) {
        console.log("Create Book Appointment",error.message)
    }
})
const createAppointmentSlice = createSlice({
    name:"createAppointmentSlice",
    initialState:{
        isLoading:false,
        isError:false,
        success:null,
        message:null
    },
    reducers:{
        clearAppointment(state,action){
            return{
                isLoading: false,
                isError: false,
                success: null,
                message: null
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createAppointmentApi.pending,(state)=>{
            state.isLoading = true
            state.success = null
            state.message = null
        })
        .addCase(createAppointmentApi.fulfilled,(state,action)=>{
            state.isLoading = false
            state.success = action.payload.success
            state.message = action.payload.message
        })
        .addCase(createAppointmentApi.rejected,(state)=>{
            state.isError = true
            state.success = null
            state.message = null
        })
    }
})
export const { clearAppointment } = createAppointmentSlice.actions
export default createAppointmentSlice.reducer