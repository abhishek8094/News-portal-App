import React from 'react'

const ArticleDetail = () => {
    
  return (
    <div>
      <h1>{ArticleDetail.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  )
}

export default ArticleDetail
