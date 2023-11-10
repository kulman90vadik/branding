
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  search: ''
}

export const searchClise = createSlice({
  name: 'search',
  initialState,

  reducers: {
    searchHandler: (state, str) => {
      state.search = str.payload
    },
    closeSearchHandler: (state) => {
      state.search = ''
    }
  },
})

export const { searchHandler, closeSearchHandler } = searchClise.actions

export default searchClise.reducer