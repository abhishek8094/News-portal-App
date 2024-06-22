import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category = '', page = 1 }) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`);
    return response.data;
  }
);

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
    },
//see this
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticles.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.articles = action.payload.articles;
          state.totalPages = Math.ceil(action.payload.totalResults / 20); 
        })
        .addCase(fetchArticles.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
      }

  },
});

export const { setArticles, setStatus, setError, setCategory, setPage } = articleSlice.actions;
export default articleSlice.reducer;
