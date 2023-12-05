// 3 ШАГ
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type FetchParams = { categoryId: string, page: string, orderId: string }
// ODER
// type FetchParams = Record <string, string>;

export const fetchCollection = createAsyncThunk<CollectionItem[], Record<string, string>>('collection/fetchCollectionStatus', async (params) => {
  const { categoryId, page, orderId } = params;
  const { data } = await axios.get<CollectionItem[]>(`https://652cdf7ad0d1df5273efc824.mockapi.io/collection?${categoryId}${page}${orderId}`);
    return data as CollectionItem[];
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
  status: 'loading' | 'success' | 'error';
}

const initialState: CollectionState = {
  collection: [],
  countCategory: 0,
  priceOrderId: '',
  countPage: 1,
  status: 'loading'
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,

  reducers: {
    // collectionHandler: (state, obj: PayloadAction<CollectionItem>) => {
    //   state.collection = obj.payload;
    // },
    onChengeBtn: (state, obj: PayloadAction<CollectionItem>) => {
      state.collection = state.collection.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, activeBtn: !el.activeBtn }
      );
    },
    onChengeLike: (state, obj: PayloadAction<CollectionItem>) => {
      state.collection = state.collection.map((el) =>
        Number(el.id) !== Number(obj.payload.id)
          ? el
          : { ...el, activeLike: !el.activeLike }
      );
    },
    categoryChange: (state, index: PayloadAction<number>) => {
      state.countCategory = index.payload;
    },
    chengePriceOrder: (state, id: PayloadAction<string>) => {
      state.priceOrderId = id.payload;
    },
    // onChengeSizes: (index) => {
      // console.log(index.payload);
      // console.log(id);
    // },
    handlePageClick: (state, index) => {
      state.countPage = index.payload;
      console.log(state.countPage);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state, action) => {
      state.status = 'loading';
      state.collection = [];
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      state.collection = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchCollection.rejected, (state, action) => {
      state.status = 'error';
      state.collection = []
    });
  }
  // extraReducers: {
  //   [fetchCollection.pending]: (state) => {
  //     state.status = 'loading';
  //     state.collection = []
  //   },
  //   [fetchCollection.fulfilled]: (state, action) => {
      // state.collection = action.payload;
      // state.status = 'succes';
  //   },
  //   [fetchCollection.rejected]: (state) => {
      // state.status = 'error';
      // state.collection = []
  //   }
  // }
});

export const {
  onChengeBtn,
  onChengeLike,
  categoryChange,
  chengePriceOrder,
  // priceOrderId,
  handlePageClick,
} = collectionSlice.actions;

export default collectionSlice.reducer;
