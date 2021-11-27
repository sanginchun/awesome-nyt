import React, { FC } from 'react';

import bookmarkStore from '../store/boomark';
import { observer } from 'mobx-react-lite';

import ArticleList from '../components/ArticleList/ArticleList';

const Bookmarks: FC = () => {
  const { state: bookmarkedArticles } = bookmarkStore;
  const sortedArticles = Array.from(Object.values(bookmarkedArticles))
    .sort((a, b) => b.bookmarkedAt - a.bookmarkedAt)
    .map(({ article }) => article);

  return <section>{<ArticleList articles={sortedArticles} />}</section>;
};

export default observer(Bookmarks);
