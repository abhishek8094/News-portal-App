import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
      <img className='w-full' src={article.urlToImage} alt={ArticleCard.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base mb-6">{article.description}</p>
        <Link to={`/article/${article.title}`} className="bg-blue-500 rounded-sm p-2 text-white hover:underline ">Read more <span>-></span></Link>
      </div>
    </div>
  )
}

export default ArticleCard;
