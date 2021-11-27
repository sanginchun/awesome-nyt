import React, { FC, useEffect, useState } from 'react';
import { searchArticles } from '../api/NYTimes';
import { Article } from '../types';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);

  const Articles = articles.map(({ _id, headline, web_url }) => (
    <li key={_id}>
      <a href={web_url} target="_blank">
        {headline.main}
      </a>
    </li>
  ));

  useEffect(() => {
    if (searchTerm.length) {
      searchArticles(searchTerm).then(setArticles);
    }
  }, [searchTerm]);

  return (
    <section>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>{Articles}</ul>
    </section>
  );
};

export default Home;
