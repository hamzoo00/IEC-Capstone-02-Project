import { configureStore } from '@reduxjs/toolkit'
import ProductDetailSlice from './Slices/ProductDetails'
import CartDetailsSlice from './Slices/CartDetails'

export const store = configureStore({
  reducer: {
    ProductDetails: ProductDetailSlice,
    CartDetails: CartDetailsSlice,

  },
})