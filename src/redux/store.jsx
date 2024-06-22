import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlice";
import favoritesSlice from "./slices/favoritesSlice";


const store = configureStore({
    reducer:{
        articles:articleSlice,
        favorites:favoritesSlice
    }
})

export default store;