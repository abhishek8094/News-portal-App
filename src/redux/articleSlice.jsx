import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
    category: "general",
    page: 1,
    articlesPerPage: 5
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action){
        state.status = action.payload;
    },
    setCategory(state,action){
        state.category = action.payload;
        state.page = 1;
    },
    setPage(state, action) {
        state.page = action.payload;
    }

  },
});

export const { setArticles, setStatus, setError, setCategory, setPage } = articleSlice.actions;
export default articleSlice.reducer;
