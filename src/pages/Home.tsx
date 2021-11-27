import React, { FC, useState } from 'react';

import { useArticles } from '../hooks/useArticles';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, loadMoreArticles, canLoadMore } = useArticles(searchTerm);

  const Articles = articles.map(({ _id, headline, web_url }) => (
    <li key={_id}>
      <a href={web_url} target="_blank">
        {headline.main}
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
      <ul>{Articles}</ul>
      {articles.length && canLoadMore ? (
        <button onClick={loadMoreArticles}>불러오기</button>
      ) : null}
    </section>
  );
};

export default Home;
