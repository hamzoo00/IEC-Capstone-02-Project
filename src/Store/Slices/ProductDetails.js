import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Products: [],
  featureProducts: [],
}

const ProductDetailSlice = createSlice({
  name: 'Product Details',
  initialState,
  reducers: {
      loadData: (state,action)=>{
            state.Products = action.payload;
      },
      featureLoadData: (state,action)=>{
            state.featureProducts = action.payload;
      }
  }
})

export const {loadData, featureLoadData}= ProductDetailSlice.actions;
export default ProductDetailSlice.reducer