import './ArticleList.scss';
import React, { FC, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import bookmarkStore from '../../store/boomark';
import { IArticle } from '../../types';

import Article from '../Article/Article';
import ConfirmModal from '../Modal/ConfirmModal';

type ArticleListProps = {
  articles: IArticle[];
  shouldConfirmRemoveBookmark: boolean;
};

const ArticleList: FC<ArticleListProps> = ({
  articles,
  shouldConfirmRemoveBookmark,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const articleId = useRef('');

  const getBookmarkClickHandler =
    (isBookmarked: boolean, article: IArticle) => () => {
      if (!isBookmarked) {
        bookmarkStore.addBookmark(article);
        return;
      }

      if (shouldConfirmRemoveBookmark) {
        articleId.current = article.id;
        setModalOpen(true);
      } else {
        bookmarkStore.removeBookmark(article.id);
      }
    };

  const handleModalConfirm = () => {
    if (articleId.current.length) {
      bookmarkStore.removeBookmark(articleId.current);
    }

    setModalOpen(false);
  };

  const ArticlesListItems = articles.map((article) => {
    const isBookmarked = !!bookmarkStore.state[article.id];

    return (
      <li key={article.id}>
        <a href={article.url} target="_blank">
          <Article
            article={article}
            isBookmarked={isBookmarked}
            onBookmarkClick={getBookmarkClickHandler(isBookmarked, article)}
          />
        </a>
      </li>
    );
  });

  return (
    <ul className="article-list">
      {ArticlesListItems}
      {modalOpen && (
        <ConfirmModal
          onConfirm={handleModalConfirm}
          close={() => setModalOpen(false)}
        >
          <p>즐겨찾기에서 삭제하시겠습니까?</p>
        </ConfirmModal>
      )}
    </ul>
  );
};

export default observer(ArticleList);
