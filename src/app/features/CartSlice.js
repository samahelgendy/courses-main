import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state , action)=>{
            const findProducts = state.find((product) => product.id === action.payload.id);
            if(findProducts){
               findProducts.quantity += 1;
               message.error("المنتج موجود مسبقا فى السلة ")
            }else{
                const productClone = {...action.payload , quantity:1};
                state.push(productClone);
                message.success('تمت اضافة المنتج بنجاح ');
            }
                    
        },
        removeFromCart:(state , action)=>{
            return state.filter((product)=> product.id !== action.payload.id );
        },
        clear:(state , action)=>{
            return [];
        },
    }
});
export const { addToCart, removeFromCart, clear , findProducts } = cartSlice.actions;

export default cartSlice.reducer;