

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BasketItem = {
  id: number;
  title: string;
  price: number;
  activeBtn: boolean;
  image: string;
  activeLike: boolean;
  sizes: { size: string; activeSize: boolean }[];
};

interface BasketState {
  basketCollection: BasketItem[];
  count: number,
  tottal: number
};

const initialState: BasketState = {
  basketCollection: [],
  count: 0,
  tottal: 0
};

export const basketCollectionClise = createSlice({
  name: 'basketCollection',
  initialState,

  reducers: {
    addToCart: (state, objBasket: PayloadAction<BasketItem>) => {   
      if (state.basketCollection.find((item) => Number(item.id) === Number(objBasket.payload.id))) {
        state.basketCollection = state.basketCollection.filter((elem) => {
          return (
            Number(elem.id) !== Number(objBasket.payload.id)
            )
          })
        state.tottal -= objBasket.payload.price;
        state.count = state.count - 1;
      } else {
        // ??
        state.basketCollection = [...state.basketCollection, {...objBasket.payload}];
        state.count = state.count + 1;
        state.tottal += objBasket.payload.price;
      }
    },
    plusTotalPrice: (state, price: PayloadAction<number>) => {
      state.tottal += price.payload;
    },
    minusTotalPrice: (state, price: PayloadAction<number>) => {
      state.tottal -= price.payload;
    },
    deleteCartBasket: (state, obj: PayloadAction<BasketItem>) => {
      state.basketCollection = state.basketCollection.filter((el) => (Number(el.id) !== Number(obj.payload.id)) )
      state.count = state.count - 1;
      state.tottal -= obj.payload.price;
    }
  },
})



export const { addToCart, deleteCartBasket, plusTotalPrice, minusTotalPrice } = basketCollectionClise.actions

// count tottal

export default basketCollectionClise.reducer