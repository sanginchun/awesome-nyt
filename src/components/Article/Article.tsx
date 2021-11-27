import React, { FC, MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import bookmarkStore from '../../store/boomark';

import { IArticle } from '../../types';
import { NYT_STATIC_BASE_URL } from '../../config';

const Article: FC<IArticle> = (props) => {
  const { id, url, title, content, thumbnail } = props;
  const isBookmarked = !!bookmarkStore.state[id];

  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();

    if (isBookmarked) {
      bookmarkStore.removeBookmark(id);
    } else {
      bookmarkStore.addBookmark({ id, title, content, thumbnail, url });
    }
  };

  return (
    <article>
      {thumbnail && <img src={`${NYT_STATIC_BASE_URL}/${thumbnail}`} alt="" />}
      <h2>{title}</h2>
      <button onClick={handleButtonClick}>
        즐겨찾기 {isBookmarked ? '취소' : '추가'}
      </button>
      <p>{content}</p>
    </article>
  );
};

export default observer(Article);
