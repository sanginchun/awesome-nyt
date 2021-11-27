import { ArticleResponse, Article, Multimedia } from '../types';
import { MIN_THUMBNAIL_WIDTH } from '../config';

export const parseArticle = (response: ArticleResponse): Article => {
  const { _id, web_url, lead_paragraph, headline, multimedia } = response;

  return {
    id: _id,
    url: web_url,
    title: headline.main,
    content: lead_paragraph,
    thumbnail: getThumbnail(multimedia),
  };
};

const getThumbnail = (multimedia: Multimedia[]): string => {
  return multimedia
    .filter((m) => m.width >= MIN_THUMBNAIL_WIDTH)
    .sort((m1, m2) => m1.width - m2.width)[0]?.url;
};
