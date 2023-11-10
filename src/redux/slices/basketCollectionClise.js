

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  basketCollection: []
}

export const basketCollectionClise = createSlice({
  name: 'basketCollection',
  initialState,

  reducers: {
    addToCart: (state, objBasket) => {
      // state.search = str.payload
      console.log(objBasket.payload);
     
      if (state.basketCollection.find((item) => Number(item.id) === Number(objBasket.payload.id))) {
        state.basketCollection = state.basketCollection.filter((elem) => Number(elem.id) !== Number(objBasket.payload.id))
      } else {
        // setBasketCollections((prev) => [...prev, objBasket]);
        console.log('ne');
        state.basketCollection = [...state.basketCollection, objBasket.payload];
        console.log(state.basketCollection);
      }

    }

  },
})

export const { addToCart } = basketCollectionClise.actions

export default basketCollectionClise.reducer