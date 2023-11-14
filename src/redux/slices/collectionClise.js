// 3 ШАГ

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  collection: [],
  countCategory: 0
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,

  reducers: {
    collectionHandler: (state, obj) => {
      state.collection = obj.payload;
    },
    onChengeBtn: (state, obj) => {
      state.collection = state.collection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeBtn: !el.activeBtn})
          // ПЕРЕПИСАТЬ!!!!!!!!!!!!!!!
    },
    onChengeLike: (state, obj) => {
      state.collection = state.collection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeLike: !el.activeLike})
    },
    // delChengeBtn: (state, obj) => {
    //   state.collection = state.collection.map((el) => (Number(el.id) !== Number(obj.payload.id)) ? el : {...el, activeBtn: !el.activeBtn})
    // }
    categoryChange: (state, index) => {
      state.countCategory = index.payload;
    }
  }
})

export const { collectionHandler, onChengeBtn, onChengeLike, categoryChange } = collectionSlice.actions

export default collectionSlice.reducer