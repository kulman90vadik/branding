// 3 ШАГ

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collection: [],
  countCategory: 0,
  priceOrderId: "",
  countPage: 1,
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
    onChengeSizes: (state, index, id) => {
      console.log(index.payload);
      // console.log(id);
    },
    handlePageClick: (state, index) => {
      state.countPage = index.payload;
      console.log(state.countPage);
    },
  },
});

export const {
  collectionHandler,
  onChengeBtn,
  onChengeLike,
  categoryChange,
  chengePriceOrder,
  priceOrderId,
  onChengeSizes,
  handlePageClick,
} = collectionSlice.actions;

export default collectionSlice.reducer;
