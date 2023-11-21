

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  basketCollection: [],
  count: 0,
  tottal: 0
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
        state.tottal -= objBasket.payload.price;
        state.count = state.count - 1;
      } else {
        state.basketCollection = [...state.basketCollection, {...objBasket.payload, count: 0}];
        state.count = state.count + 1;
        state.tottal += objBasket.payload.price;
      }
    },
    plusTotalPrice: (state, price) => {
      state.tottal += price.payload;
    },
    minusTotalPrice: (state, price) => {
      state.tottal -= price.payload;
    },
    deleteCartBasket: (state, obj) => {
      state.basketCollection = state.basketCollection.filter((el) => (Number(el.id) !== Number(obj.payload.id)) )
      state.count = state.count - 1;
      state.tottal -= obj.payload.price;
    }
  },
})



export const { addToCart, count, deleteCartBasket, tottal, plusTotalPrice, minusTotalPrice } = basketCollectionClise.actions

export default basketCollectionClise.reducer