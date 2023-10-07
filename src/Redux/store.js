import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/slices/apis/apiSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})