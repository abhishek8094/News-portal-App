import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name:"favorites",
  initialState:{
    favorites:JSON.parse(localStorage.getItem('favorites')) || [],
  },

  reducers:{
    addFavorite:(state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },

    removeFavorite:(state, action) =>{
      state.favorites = state.favorites.filter((article) => article.title !== action.payload.title);
      localStorage.setItem('favorites',JSON.stringify(state.favorites));
    }

  }
})

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
