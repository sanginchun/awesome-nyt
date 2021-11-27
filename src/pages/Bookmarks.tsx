import React, { FC } from 'react';

import boomarkStore from '../store/boomark';
import { observer } from 'mobx-react-lite';

import Article from '../components/Article/Article';

const Bookmarks: FC = () => {
  const { state: bookmarkedArticles } = boomarkStore;
  const sorted = Array.from(Object.values(bookmarkedArticles)).sort(
    (a, b) => b.bookmarkedAt - a.bookmarkedAt
  );

  const ArticlesListItems = sorted.map(({ article }) => (
    <li key={article.id}>
      <a href={article.url} target="_blank">
        <Article {...article} />
      </a>
    </li>
  ));

  return (
    <section>
      <ul>{ArticlesListItems}</ul>
    </section>
  );
};

export default observer(Bookmarks);
