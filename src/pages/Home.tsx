import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';

import { useArticles } from '../hooks/useArticles';

import boomarkStore from '../store/boomark';

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, loadMoreArticles, canLoadMore } = useArticles(searchTerm);
  const { state: bookmarkedArticles } = boomarkStore;

  const Articles = articles.map((article) => (
    <li key={article._id}>
      <a href={article.web_url} target="_blank">
        {article.headline.main}
      </a>
      {bookmarkedArticles[article._id] ? (
        <button onClick={() => boomarkStore.removeBookmark(article._id)}>
          즐겨 찾기 취소
        </button>
      ) : (
        <button onClick={() => boomarkStore.addBookmark(article)}>
          즐겨 찾기
        </button>
      )}
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

export default observer(Home);
