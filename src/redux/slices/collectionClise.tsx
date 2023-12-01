// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// thunkApi
export const fetchCollection = createAsyncThunk('collection/fetchCollectionStatus', async (params) => {
  const {categoryId, page, orderId} = params;
  const {data} = await axios.get(`https://652cdf7ad0d1df5273efc824.mockapi.io/collection?${categoryId}${page}${orderId}`);
    return data;
  }
)

type CollectionItem = {
  id: number;
  title: string;
  price: number;
  activeBtn: boolean;
  image: string;
  activeLike: boolean;
  sizes: { size: string; activeSize: boolean }[];
};

interface CollectionState {
  collection: CollectionItem[];
  countCategory: number;
  priceOrderId: string;
  countPage: number;
  status: string;
}

const initialState: CollectionState = {
  collection: [],
  countCategory: 0,
  priceOrderId: "",
  countPage: 1,
  status: 'loading'
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,

  reducers: {
    collectionHandler: (state, obj) => {
      state.collection = obj.payload;
    },
    onChengeBtn: (state, obj) => {
      state.collection = state.collection.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, activeBtn: !el.activeBtn }
      );
    },
    onChengeLike: (state, obj) => {
      state.collection = state.collection.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, activeLike: !el.activeLike }
      );
    },
    categoryChange: (state, index) => {
      state.countCategory = index.payload;
    },
    chengePriceOrder: (state, id) => {
      state.priceOrderId = id.payload;
    },
    onChengeSizes: (index) => {
      console.log(index.payload);
      // console.log(id);
    },
    handlePageClick: (state, index) => {
      state.countPage = index.payload;
      console.log(state.countPage);
    },
  },

  extraReducers: {
    [fetchCollection.pending]: (state) => {
      state.status = 'loading';
      state.collection = []
    },
    [fetchCollection.fulfilled]: (state, action) => {
      state.collection = action.payload;
      state.status = 'success';
    },
    [fetchCollection.rejected]: (state) => {
      state.status = 'error';
      state.collection = []
    }
  }


});

export const {
  onChengeBtn,
  onChengeLike,
  categoryChange,
  chengePriceOrder,
  priceOrderId,
  onChengeSizes,
  handlePageClick,
} = collectionSlice.actions;

export default collectionSlice.reducer;
