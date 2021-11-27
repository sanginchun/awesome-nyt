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
      {sortedArticles.length ? (
        <ArticleList
          articles={sortedArticles}
          shouldConfirmRemoveBookmark={true}
        />
      ) : (
        <p style={{ marginTop: '3rem', textAlign: 'center' }}>
          아직 즐겨찾기한 기사가 없습니다
        </p>
      )}
    </section>
  );
};

export default observer(Bookmarks);
