import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
});
const loaderSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',  // this is where 'status' comes from
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export default loaderSlice.reducer
