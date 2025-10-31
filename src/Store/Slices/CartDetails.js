import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 product: [],
 totalQuantity: 0,
 totalPrice: 0,
}

const CartDetailsSlice = createSlice({
  name: 'Products in cart',
  initialState,
  reducers: {

    addItem: (state, action) => {
         const existingItem = state.product.find(item => item.productId === action.payload.productId)
         
         if (existingItem) {
           existingItem.quantity += 1
           state.totalQuantity += 1
           state.totalPrice += Number.parseFloat(action.payload.price)
         } else {
           state.product.push({
             ...action.payload,
             quantity: 1,
           })
           state.totalQuantity += 1
           state.totalPrice += Number.parseFloat(action.payload.price)
         }
        },

    addItemInQuantity: (state,action)=>{
        const existing = state.product.find((p)=> p.productId === action.payload.productId)
        if(existing){
             existing.quantity += action.payload.quantity;
             state.totalQuantity += action.payload.quantity;
             state.totalPrice+=(action.payload.quantity * Number.parseFloat(action.payload.price));
        }
        else {
             state.product.push(action.payload)
             state.totalQuantity += action.payload.quantity;
             state.totalPrice+= (action.payload.quantity * Number.parseFloat(action.payload.price));   
        }     
    },

    removeItem: (state, action) => {
      const productId = action.payload
      const existingItem = state.product.find(item => item.productId === productId)
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalPrice -=(existingItem.price * existingItem.quantity )
        state.product = state.product.filter(item => item.productId !== productId)
      }
    },

    increaseQuantity: (state, action) => {
      const productId  = action.payload
      const existingItem = state.product.find(item => item.productId === productId)
      
      if (existingItem ) {
        existingItem.quantity += 1
        state.totalQuantity += 1 
        state.totalPrice += Number.parseFloat(existingItem.price)
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload
      const existingItem = state.product.find(item => item.productId === productId)
      
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
        state.totalQuantity -= 1
        state.totalPrice -= Number.parseFloat(existingItem.price)
      }
    },

    clearCart: (state) => {
      state.product = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },

  }
}
)

export const {addItem, addItemInQuantity, removeItem, increaseQuantity, decreaseQuantity, clearCart } = CartDetailsSlice.actions

export default CartDetailsSlice.reducer