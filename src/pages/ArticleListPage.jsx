import React, {useState, useEffect} from 'react'
import ArticleList from "../components/ArticleList"
import articles from '../article-content'
import '../style/ArticleList.css'

const ArticleListPage = () => {
  const [articleData, setArticleData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticleData(articles)
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <h1>Articles</h1>
    <div className='article-list'>
      {isLoading ? (
        <p className='loadingText'>Loading articles...</p>
      ) : articleData.length > 0 ?
        (<ArticleList articles={articles} />
      ) : (<h1>No articles available.</h1>)
      }
    </div>

    </>
  )
}

export default ArticleListPage