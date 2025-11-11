import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Products: [],
}

const ProductDetailSlice = createSlice({
  name: 'Product Details',
  initialState,
  reducers: {
      loadData: (state,action)=>{
            state.Products = action.payload;
      },
     
  }
})

export const {loadData, featureLoadData}= ProductDetailSlice.actions;
export default ProductDetailSlice.reducer