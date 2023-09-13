import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getFeatured = createAsyncThunk('Featured_products/getFeatured',async () => {
  try {
    const response = await axios.get("http://localhost:5000/courses");
    return response.data
  } catch(error) {
    console.error(error);
  }
})

const initialState = {
  loading: false,
  features: [],
  error:""
}
const Featured_products = createSlice({
  name: "Featured",
  initialState,
  extraReducers: (builder)=>{
    builder.addCase(getFeatured.pending,(state) => {
      state.loading = true
    })
    builder.addCase(getFeatured.fulfilled,(state,action) => {
      state.loading = false
      state.features = action.payload
      state.error = ''
    })
    builder.addCase(getFeatured.rejected,(state,action) => {
      state.loading = false
      state.features = []
      state.error = action.error.message
    })
  }
})
export default Featured_products.reducer;