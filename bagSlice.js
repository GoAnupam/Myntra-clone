import { createSlice } from '@reduxjs/toolkit';

const initialBag = JSON.parse(localStorage.getItem("bag")) || [];

const bagSlice = createSlice({
  name: 'bag',
  initialState: initialBag,
  reducers: {
    addToBag: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("bag", JSON.stringify(state));
    },

    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        const updated = state.filter(i => i.id !== item.id);
        localStorage.setItem("bag", JSON.stringify(updated));
        return updated;
      }
      localStorage.setItem("bag", JSON.stringify(state));
    },

    removeFromBag: (state, action) => {
      const updated = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem("bag", JSON.stringify(updated));
      return updated;
    },

    clearBag: () => {
      localStorage.removeItem("bag");
      return [];
    }
  }
});

export const { addToBag, removeFromBag, decreaseQuantity, clearBag } = bagSlice.actions;
export default bagSlice.reducer;
