import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={article.urlToImage} alt={ArticleCard.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.description}</p>
        <Link to={`/article/${article.title}`} className="text-blue-500 hover:underline">Read more</Link>
      </div>
    </div>
  )
}

export default ArticleCard
