import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchArticles from "../api";
import { setArticles, setStatus, setError } from "../redux/articleSlice";
import CategoryFilter from "../components/CategoryFilter";
import ArticleCard from "../components/ArticleCard";
import Pagination from "../components/Pagination";
import { Circles } from 'react-loader-spinner';


const Home = () => {
  const dispatch = useDispatch();
  const {articles, status, error, category, page} = useSelector((state) => state.articles)

  const loadArticles = async () => {
    dispatch(setStatus("loading"));
    try{
      const data = await fetchArticles(category, page);
      dispatch(setArticles(data.articles));
      dispatch(setStatus("succeeded"));
    }catch(err){
      dispatch(setError(err.message));
      dispatch(setStatus("failed"));
    }
  }
  
  useEffect(() => {
    loadArticles();
  },[category, page, dispatch]);

  if (status === 'loading') {
    return <p className="flex items-center justify-center h-screen mt-8"><Circles
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    /></p>;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <CategoryFilter/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 ml-16">
        {
          articles.map((article) => (
            <ArticleCard key = {article.title} article = {article} />
          ))
        }
      </div>
      <Pagination/>
    </div>
  );
};

export default Home;
