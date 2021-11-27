import React, { FC, useState } from 'react';
import { useArticles } from '../../hooks/useArticles';

import ArticleList from '../ArticleList/ArticleList';
import SearchBar from '../SearchBar/SearchBar';
import LoadButton from '../LoadButton/LoadButton';

import searchTermStore from '../../store/searchTerm';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState(searchTermStore.state);
  const { articles, loadMoreArticles, canLoadMore } = useArticles(searchTerm);

  return (
    <section>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Articles ..."
      />
      <ArticleList articles={articles} shouldConfirmRemoveBookmark={false} />
      {articles.length && canLoadMore ? (
        <LoadButton onClick={loadMoreArticles} />
      ) : null}
    </section>
  );
};

export default Home;
