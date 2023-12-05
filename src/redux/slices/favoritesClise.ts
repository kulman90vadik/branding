

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritesItem = {
  id: number;
  title: string;
  price: number;
  activeBtn: boolean;
  image: string;
  activeLike: boolean;
  sizes: { size: string; activeSize: boolean }[];
};

interface FavoritesState {
  count: number;
  favoritesCollection: FavoritesItem[];
}

const initialState: FavoritesState = {
  favoritesCollection: [],
  count: 0,
} 

export const favoritesClise = createSlice({
  name: 'favoritesCollection',
  initialState,

  reducers: {
    addToFavorites: (state, objBasket: PayloadAction<FavoritesItem>) => {   
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
    onChengeLikeBasket: (state, obj: PayloadAction<FavoritesItem>) => {
      state.favoritesCollection = state.favoritesCollection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeLike: !el.activeLike})
    },
    onChengeBtnBasket: (state, obj: PayloadAction<FavoritesItem>) => {
      state.favoritesCollection = state.favoritesCollection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeBtn: !el.activeBtn})
    }
  },
})

export const { addToFavorites, onChengeLikeBasket, onChengeBtnBasket } = favoritesClise.actions
// count 
export default favoritesClise.reducer