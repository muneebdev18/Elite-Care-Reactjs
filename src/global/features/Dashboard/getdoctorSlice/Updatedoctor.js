import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const updateDoctorSliceApi = createAsyncThunk("updateDoctorApi",async(body)=>{
  const {id} = body
  const formData = new FormData()

  formData.append("name", body.name);
  formData.append("email", body.email);
  formData.append("serviceOffered", body.serviceOffered);
  formData.append("availableTime",body?.availableTime?.toString());
  formData.append("doctorImg", body.doctorImg);
  try {
    const res = await fetch(`http://localhost:8080/api/doctor/${id}`,{
      method:'POST',
      // headers:{
      //   'Content-Type':'application/json'
      // },
      body:formData
    })
    const result = await res.json()
    console.log(result)
    return result
  } catch (error) {
    console.log(error.message)
  }
})

const updateDoctorSlices = createSlice({
  name:"updateDoctorSlices",
  initialState:{
    isLoading:false,
    isError:false,
    data:null,
    success:true,
    message:null
  },
  extraReducers:(builder)=>{
    builder.addCase(updateDoctorSliceApi.pending,(state)=>{
      state.isLoading = true
      state.data = null
    })
    builder.addCase(updateDoctorSliceApi.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.data = action?.payload;
      state.success = action?.payload?.success;
      state.message = action?.payload?.message;
    })
    builder.addCase(updateDoctorSliceApi.rejected, (state,action)=>{
      state.isError = true;
      state.data = null;
    })
  }
})

export default updateDoctorSlices.reducer