import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
  return (
    <div>
      <img src={ArticleCard.urlToImage} alt={ArticleCard.title} />
      <div>
        <div>{article.title}</div>
        <p>{article.description}</p>
        <Link to={`/article/${article.title}`}>Read more</Link>
      </div>
    </div>
  )
}

export default ArticleCard
