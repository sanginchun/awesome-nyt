import './Home.scss';
import React, { FC, useState } from 'react';
import { useArticles } from '../hooks/useArticles';

import ArticleList from '../components/ArticleList/ArticleList';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, loadMoreArticles, canLoadMore } = useArticles(searchTerm);

  return (
    <section className="home">
      <input
        className="home__search-bar"
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Articles ..."
      />
      <ArticleList articles={articles} />
      {articles.length && canLoadMore ? (
        <button className="load-btn" onClick={loadMoreArticles}>
          불러오기
        </button>
      ) : null}
    </section>
  );
};

export default Home;
