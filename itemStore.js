import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./bagSlice";
import loaderReducer from './loaderSlice'
const myntraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        bag:bagSlice.reducer,
        products:loaderReducer
    }
})
export default myntraStore