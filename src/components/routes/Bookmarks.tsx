import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import bookmarkStore from '../../store/boomark';
import ArticleList from '../ArticleList/ArticleList';

const Bookmarks: FC = () => {
  const { state: bookmarkedArticles } = bookmarkStore;
  const sortedArticles = Array.from(Object.values(bookmarkedArticles))
    .sort((a, b) => b.bookmarkedAt - a.bookmarkedAt)
    .map(({ article }) => article);

  return (
    <section>
      <ArticleList
        articles={sortedArticles}
        shouldConfirmRemoveBookmark={true}
      />
    </section>
  );
};

export default observer(Bookmarks);
