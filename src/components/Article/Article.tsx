import './Article.scss';
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import React, { FC, MouseEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import bookmarkStore from '../../store/boomark';

import { IArticle } from '../../types';
import { NYT_STATIC_BASE_URL, MAX_CONTENT_LENGTH } from '../../config';
import ConfirmModal from '../Modal/ConfirmModal';

const Article: FC<IArticle> = (props) => {
  const { id, url, title, content, thumbnail } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const isBookmarked = !!bookmarkStore.state[id];
  const BookmarkIcon = isBookmarked ? RiBookmarkFill : RiBookmarkLine;

  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();

    if (isBookmarked) {
      setModalOpen(true);
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
      {modalOpen && (
        <ConfirmModal
          onConfirm={() => {
            bookmarkStore.removeBookmark(id);
            setModalOpen(false);
          }}
          close={() => setModalOpen(false)}
        >
          <p>즐겨찾기에서 삭제하시겠습니까?</p>
        </ConfirmModal>
      )}
    </article>
  );
};

export default observer(Article);
