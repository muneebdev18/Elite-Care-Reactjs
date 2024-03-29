import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const postContactUsApi = createAsyncThunk("postContactUsApi",async(body)=>{
try {
    const response = await fetch(`${constants.baseUrl}/api/contactus`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    const result = await response.json()
    return result
} catch (error) {
    console.log("Error in Contact Us Post",error.message)
}
})
const postContactUs = createSlice({
    name:"postContactUs",
    initialState:{
        isLoading:false,
        isError:false,
        success:null,
        message:null
    },
    reducers:{
        clearContactUs(){
            return{
                isLoading:false,
                isError:false,
                success:null,
                message:null
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(postContactUsApi.pending,(state)=>{
            state.isLoading = true
            state.data = null
        })
        .addCase(postContactUsApi.fulfilled,(state,action)=>{
            state.message = action.payload.message
            state.isLoading = false
            state.isError = false
            state.success = action.payload.success
        })
        .addCase(postContactUsApi.rejected,(state)=>{
            state.isError = true
            state.data = null
        })
    }
})
export const {clearContactUs} = postContactUs.actions
export default postContactUs.reducer