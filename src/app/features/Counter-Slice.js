import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    name: 'counterSlice',
  initialState:1,
  reducers: {
    increment: (state , action) => {

        return state = state + action.payload;
    },
    decrement: (state , action) => {
         return state = state - action.payload;   
      },
  }
});

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;