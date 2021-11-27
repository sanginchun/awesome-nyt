import React, { FC, useState } from 'react';
import { useArticles } from '../hooks/useArticles';

import { observer } from 'mobx-react-lite';
// import boomarkStore from '../store/boomark';

import Article from '../components/Article/Article';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, loadMoreArticles, canLoadMore } = useArticles(searchTerm);
  // const { state: bookmarkedArticles } = boomarkStore;

  const ArticlesListItems = articles.map((article) => (
    <li key={article.id}>
      <a href={article.url} target="_blank">
        <Article {...article} />
      </a>
    </li>
  ));

  return (
    <section>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>{ArticlesListItems}</ul>
      {articles.length && canLoadMore ? (
        <button onClick={loadMoreArticles}>불러오기</button>
      ) : null}
    </section>
  );
};

export default observer(Home);
