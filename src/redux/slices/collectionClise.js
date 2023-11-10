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
      state.collection = obj.payload
    }
  },
})

export const { collectionHandler } = collectionSlice.actions

export default collectionSlice.reducer