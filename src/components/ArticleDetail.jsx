import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"


const ArticleDetail = () => {
  const {title} = useParams();
  const article = useSelector((state) => state.articles.articles.find((article) => article.title === title))

  if(!article){
    return <p>Article not found. </p>
  }
    
  return (
    <div className="max-w-2xl mx-auto my-4 p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img className="w-full"  src={article.urlToImage} alt={article.title} />
      <p className="text-gray-700 text-base my-4">{article.content}</p>
    </div>
  )
}

export default ArticleDetail
