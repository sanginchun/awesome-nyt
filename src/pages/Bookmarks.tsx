import React, { FC } from 'react';

import boomarkStore from '../store/boomark';
import { observer } from 'mobx-react-lite';

const Bookmarks: FC = () => {
  const { state: bookmarkedArticles } = boomarkStore;
  const sorted = Array.from(Object.values(bookmarkedArticles)).sort(
    (a, b) => b.bookmarkedAt - a.bookmarkedAt
  );

  return (
    <section>
      <ul>
        {sorted.map(({ article }) => (
          <li key={article.id}>
            <a href={article.url} target="_blank">
              {article.title}
            </a>
            {bookmarkedArticles[article.id] ? (
              <button onClick={() => boomarkStore.removeBookmark(article.id)}>
                즐겨 찾기 취소
              </button>
            ) : (
              <button onClick={() => boomarkStore.addBookmark(article)}>
                즐겨 찾기
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default observer(Bookmarks);
