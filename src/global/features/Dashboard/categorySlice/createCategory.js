import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";
export const createCategoryApi = createAsyncThunk("createCategoryApi", async (body) => {

  const user = JSON.parse(localStorage.getItem('user'));
  let token = user.data?.refreshToken
  try {
    const response = await fetch(`${constants.baseUrl}api/category`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error.message)
  }
})

const createCategorySlice = createSlice({
  name: "createCategorySlice",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    message: null,
    success: null
  },
  reducers: {
    clearCategory(state, action) {
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
      .addCase(createCategoryApi.pending, (state) => {
        state.isLoading = true
        state.data = null
      })
      .addCase(createCategoryApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload.data
        state.message = action.payload.message
        state.success = action.payload.success
      })
      .addCase(createCategoryApi.rejected, (state) => {
        state.isError = true
        state.data = null
      })
  }
})
export const { clearCategory } = createCategorySlice.actions
export default createCategorySlice.reducer