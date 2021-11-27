import { useEffect, useRef, useState } from 'react';

import { Article } from '../types';
import { searchArticles } from '../api/NYTimes';
import { SEARCH_DEBOUNCE_SECONDS } from '../config';
import { debounce } from '../lib/debounce';

export const useArticles = (searchTerm: string) => {
  const currentPage = useRef(0);
  const [articles, setArticles] = useState<Article[]>([]);

  const initPosts = () => {
    if (searchTerm.length) {
      debounce(SEARCH_DEBOUNCE_SECONDS * 1000, () => {
        currentPage.current = 0;
        searchArticles(searchTerm).then(setArticles);
      });
    }
  };

  const loadMoreArticles = () => {
    searchArticles(searchTerm, ++currentPage.current).then((data) =>
      setArticles([...articles, ...data])
    );
  };

  useEffect(initPosts, [searchTerm]);

  return { articles, loadMoreArticles };
};
