import { useEffect, useRef, useState } from 'react';

import { IArticle } from '../types';
import { searchArticles } from '../api/NYTimes';
import { SEARCH_DEBOUNCE_SECONDS } from '../config';
import { debounce } from '../lib/debounce';

export const useArticles = (searchTerm: string) => {
  const currentPage = useRef(0);
  const totalPage = useRef(0);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const initPosts = () => {
    if (searchTerm.length) {
      debounce(SEARCH_DEBOUNCE_SECONDS * 1000, () => {
        currentPage.current = 0;

        searchArticles(searchTerm).then((data) => {
          totalPage.current = data.totalPage;
          setArticles(data.articles);
        });
      });
    }
  };

  const loadMoreArticles = () => {
    searchArticles(searchTerm, ++currentPage.current).then((data) =>
      setArticles([...articles, ...data.articles])
    );
  };

  useEffect(initPosts, [searchTerm]);

  return {
    articles,
    loadMoreArticles,
    canLoadMore: currentPage.current < totalPage.current - 1,
  };
};
