

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  basketCollection: [],
  count: 0,
}

export const basketCollectionClise = createSlice({
  name: 'basketCollection',
  initialState,

  reducers: {
    addToCart: (state, objBasket) => {   
      if (state.basketCollection.find((item) => Number(item.id) === Number(objBasket.payload.id))) {
        state.basketCollection = state.basketCollection.filter((elem) => {
          return (
            Number(elem.id) !== Number(objBasket.payload.id)
          )
        })
        state.count = state.count - 1;
      } else {
        state.basketCollection = [...state.basketCollection, objBasket.payload];
        state.count = state.count + 1;
      }
    }
  },
})

export const { addToCart, count } = basketCollectionClise.actions

export default basketCollectionClise.reducer