import { configureStore } from "@reduxjs/toolkit";
import {articlesSlice} from "../redux/articlesSlice";

const store = configureStore({
    reducer:{
        articles:articlesSlice
    }
})

export default store;