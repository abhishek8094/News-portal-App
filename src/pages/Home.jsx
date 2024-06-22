import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchArticles from "../api";
import { setArticles, setStatus, setError } from "../redux/slices/articleSlice";
import CategoryFilter from "../components/CategoryFilter";
import ArticleCard from "../components/ArticleCard";
import Pagination from "../components/Pagination";
import { Circles } from 'react-loader-spinner';

const Home = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.articles);

  const loadArticles = async () => {
    dispatch(setStatus("loading"));
    try {
      const data = await fetchArticles(category, page);
      dispatch(setArticles(data.articles));
      dispatch(setStatus("succeeded"));
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(setStatus("failed"));
    }
  }

  useEffect(() => {
    loadArticles();
  }, [category, page, dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (status === 'failed') {
    return <p className="text-red-500 text-center mt-8">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <CategoryFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {
          articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))
        }
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
