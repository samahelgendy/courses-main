import { configureStore } from '@reduxjs/toolkit'
import Featured_products from '../features/feature'
import  cartSlice from '../features/CartSlice';
import  counterSlice  from '../features/Counter-Slice';

const store = configureStore({
  reducer: {
    Featured: Featured_products,
    cart:cartSlice,
    counter:counterSlice
  },
})
export default store;