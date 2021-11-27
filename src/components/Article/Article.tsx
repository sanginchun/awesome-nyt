import './Article.scss';
import {
  RiBookmarkLine,
  RiBookmarkFill,
  RiErrorWarningLine,
} from 'react-icons/ri';
import React, { FC } from 'react';

import { IArticle } from '../../types';
import { NYT_STATIC_BASE_URL, MAX_CONTENT_LENGTH } from '../../config';

type ArticleProps = {
  article: IArticle;
  isBookmarked: boolean;
  onBookmarkClick: () => void;
};

const Article: FC<ArticleProps> = (props) => {
  const { article, isBookmarked, onBookmarkClick } = props;
  const { title, content, thumbnail } = article;
  const BookmarkIcon = isBookmarked ? RiBookmarkFill : RiBookmarkLine;

  return (
    <article className="article">
      <button
        className="article__bookmark-btn"
        onClick={(e) => {
          e.preventDefault();
          onBookmarkClick();
        }}
      >
        {<BookmarkIcon size={24} color="#999" />}
      </button>
      {thumbnail ? (
        <img
          className="article__thumbnail"
          src={`${NYT_STATIC_BASE_URL}/${thumbnail}`}
          alt=""
        />
      ) : (
        <div className="article__thumbnail no-image">
          <RiErrorWarningLine size={48} />
          <p>No Image</p>
        </div>
      )}
      <h2 className="article__title">{title}</h2>
      <p className="article__content">
        {content.slice(0, MAX_CONTENT_LENGTH) + ' ...more'}
      </p>
    </article>
  );
};

export default Article;
