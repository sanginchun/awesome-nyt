import './Article.scss';
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import React, { FC, MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import bookmarkStore from '../../store/boomark';

import { IArticle } from '../../types';
import { NYT_STATIC_BASE_URL, MAX_CONTENT_LENGTH } from '../../config';

const Article: FC<IArticle> = (props) => {
  const { id, url, title, content, thumbnail } = props;
  const isBookmarked = !!bookmarkStore.state[id];
  const BookmarkIcon = isBookmarked ? RiBookmarkFill : RiBookmarkLine;

  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();

    if (isBookmarked) {
      bookmarkStore.removeBookmark(id);
    } else {
      bookmarkStore.addBookmark({ id, title, content, thumbnail, url });
    }
  };

  return (
    <article className="article">
      <button className="article__bookmark-btn" onClick={handleButtonClick}>
        {<BookmarkIcon size={24} color="#999" />}
      </button>
      {thumbnail && (
        <img
          className="article__thumbnail"
          src={`${NYT_STATIC_BASE_URL}/${thumbnail}`}
          alt=""
        />
      )}
      <h2 className="article__title">{title}</h2>
      <p className="article__content">
        {content.slice(0, MAX_CONTENT_LENGTH) + ' ...more'}
      </p>
    </article>
  );
};

export default observer(Article);
