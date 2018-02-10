import React from 'react';
import ArticleListItem from './ArticleListItem'

const ArticleList = ({articleList}) => {

  return (
    <div>

        {articleList.map((a) => {

          return <ArticleListItem article = {a} key={a.id}/>
        })}

    </div>
  )
}

export default ArticleList
