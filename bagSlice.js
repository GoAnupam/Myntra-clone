import {createSlice} from '@reduxjs/toolkit'

const bagSlice = createSlice({
  name: 'bag',
  initialState: JSON.parse(localStorage.getItem("bag")) || [],
  reducers: {
    addToBag: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("bag", JSON.stringify(state));
      }
    },
    removeFromBag: (state, action) => {
      const updated = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem("bag", JSON.stringify(updated));
      return updated;
    }
  }
});

export const {addToBag}=bagSlice.actions
export const {removeFromBag}=bagSlice.actions
export default bagSlice
