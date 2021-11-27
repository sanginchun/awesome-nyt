import './ArticleList.scss';
import React, { FC } from 'react';
import { IArticle } from '../../types';

import Article from '../Article/Article';

type ArticleListProps = {
  articles: IArticle[];
};

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  const ArticlesListItems = articles.map((article) => (
    <li key={article.id}>
      <a href={article.url} target="_blank">
        <Article {...article} />
      </a>
    </li>
  ));

  return <ul className="article-list">{ArticlesListItems}</ul>;
};

export default ArticleList;
