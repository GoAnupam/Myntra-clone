import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/item";

const itemSlice = createSlice({
  name: 'items',
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItem: (state) => {
      return state;
    }
  }
});

export const { addInitialItem } = itemSlice.actions;
export default itemSlice.reducer;
