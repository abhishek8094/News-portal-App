import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../api";
import { setArticles, setStatus, setError } from "../redux/articleSlice";
import CategoryFilter from "../components/CategoryFilter";
import ArticleCard from "../components/ArticleCard";
import Pagination from "../components/Pagination";


const Home = () => {
  const dispatch = useDispatch();
  const {articles, status, error, category, page} = useSelector((state) => state.articles)

  
  
  useEffect(() => {
    const loadArticles = async () => {
      dispatch(setStatus("loading"));
      try{
        const data = await fetchData(category, page);
        dispatch(setArticles(data.articles));
        dispatch(setStatus("succeeded"));
      }catch(err){
        dispatch(setError(err.message));
        dispatch(setStatus("failed"));
      }
    }
    loadArticles();
  },[category, page, dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
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
