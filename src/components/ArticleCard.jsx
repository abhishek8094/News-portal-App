import { Link } from 'react-router-dom';
import Img from "../assets/images/defaultimg.png"
import "../components/ArticleCard.css";

const ArticleCard = ({ article }) => {
  const imageUrl = article.urlToImage || Img; // 
  const title = article.title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti atque';
  const description = article.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti atque eos maiores deleniti. Labore, sapiente?';
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-7">
        <h2 className="font-bold text-xl mb-2 article-title">{title}</h2>
        <p className="text-gray-700 text-base mb-6 article-description">{description}</p>
        <Link 
          to={`/article/${encodeURIComponent(title)}`} 
           className="inline-block bg-blue-500 rounded-sm p-2 text-white transform transition-transform duration-300 hover:translate-x-1"
        >
          <span>Read more →</span>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
