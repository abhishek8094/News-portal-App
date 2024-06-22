import { Link } from "react-router-dom";
import Img from "../assets/images/defaultimg.png";
import "../components/ArticleCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import { toast } from "react-toastify";

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.title === article.title);

  const imageUrl = article.urlToImage || Img;
  const title =
    article.title ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti atque";
  const description =
    article.description ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti atque eos maiores deleniti. Labore, sapiente?";

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
      toast.error("Remove from Favorite");
    } else {
      dispatch(addFavorite(article));
      toast.success("Add to Favorite");
    }
  };

  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg m-3 sm:m-4">
      <img className="w-full h-48 sm:h-64 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 article-title">{title}</h2>
        <p className="text-gray-700 text-base mb-4 article-description">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a
            className="inline-block bg-blue-500 rounded-lg p-2 text-white transform transition-transform duration-300 hover:translate-x-1 mb-2 sm:mb-0"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More →
          </a>

          <button
            onClick={handleFavorite}
            className="bg-blue-500 rounded-lg p-2 text-white mt-2 sm:mt-0"
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
