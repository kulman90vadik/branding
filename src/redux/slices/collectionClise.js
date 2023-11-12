// 3 ШАГ

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  collection: []
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
    }

  }
})

export const { collectionHandler, onChengeBtn } = collectionSlice.actions

export default collectionSlice.reducer