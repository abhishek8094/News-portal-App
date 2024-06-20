import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryFilter from "../components/CategoryFilter";
import ArticleCard from "../components/ArticleCard";
import Pagination from "../components/Pagination";


const Home = () => {
  const dispatch = useDispatch();
  const {articles, status, error, category, page} = useSelector((state) => state.articles)

  const fetchdata = async () => {
    
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
    );
    // console.log(response);

    const data = await response.json();
    console.log(data);
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <CategoryFilter/>
      <div>
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
