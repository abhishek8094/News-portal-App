import { configureStore } from "@reduxjs/toolkit";
import {articleSlice} from "../redux/articleSlice";

const store = configureStore({
    reducer:{
        articles:articleSlice
    }
})

export default store;