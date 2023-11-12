

import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from './slices/collectionClise'
import searchReducer from './slices/searchClise'
import basketCollectionReducer from './slices/basketCollectionClise'

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    search: searchReducer,
    basketCollection: basketCollectionReducer
  },
})
