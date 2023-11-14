

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  favoritesCollection: [],
  count: 0,
} 

export const favoritesClise = createSlice({
  name: 'favoritesCollection',
  initialState,

  reducers: {
    addToFavorites: (state, objBasket) => {   
      if (state.favoritesCollection.find((item) => Number(item.id) === Number(objBasket.payload.id))) {
        state.favoritesCollection = state.favoritesCollection.filter((elem) => {
          return (
            Number(elem.id) !== Number(objBasket.payload.id)
          )
        })
        state.count = state.count - 1;
      } else {
        state.favoritesCollection = [...state.favoritesCollection, objBasket.payload];
        state.count = state.count + 1;
      }
    },
    onChengeLikeBasket: (state, obj) => {
      state.favoritesCollection = state.favoritesCollection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeLike: !el.activeLike})
    },
    onChengeBtnBasket: (state, obj) => {
      state.favoritesCollection = state.favoritesCollection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeBtn: !el.activeBtn})
    }
  },
})

export const { addToFavorites, count, onChengeLikeBasket, onChengeBtnBasket } = favoritesClise.actions

export default favoritesClise.reducer