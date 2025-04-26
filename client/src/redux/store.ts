import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./Slices/componentSlice";

const store = configureStore({
    reducer:{
        component : componentReducer
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;