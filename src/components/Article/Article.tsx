import React, { FC } from 'react';
import { IArticle } from '../../types';
import { NYT_STATIC_BASE_URL } from '../../config';

const Article: FC<IArticle> = (props) => {
  const { title, content, thumbnail } = props;

  return (
    <article>
      {thumbnail ? (
        <img src={`${NYT_STATIC_BASE_URL}/${thumbnail}`} alt="" />
      ) : null}
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Article;
