import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const Deletedoctors = createAsyncThunk("Deletedoctors", async (body) => {
   const {id,mutate} = body;
  let Url = await fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/doctor/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  mutate()
  //   console.log(result);
  return result;
});

export const DeletedoctorSlice = createSlice({
  name: "deletedoctors",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Deletedoctors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Deletedoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data =  action.payload
      })
      .addCase(Deletedoctors.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectdoctor = (state) => state.deletedoctors;

export default DeletedoctorSlice.reducer;
