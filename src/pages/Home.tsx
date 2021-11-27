import React, { FC, useState } from 'react';
import { useArticles } from '../hooks/useArticles';

import ArticleList from '../components/ArticleList/ArticleList';
import SearchBar from '../components/SearchBar/SearchBar';
import LoadButton from '../components/LoadButton/LoadButton';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, loadMoreArticles, canLoadMore } = useArticles(searchTerm);

  return (
    <section>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Articles ..."
      />
      <ArticleList articles={articles} />
      {articles.length && canLoadMore ? (
        <LoadButton onClick={loadMoreArticles} />
      ) : null}
    </section>
  );
};

export default Home;
