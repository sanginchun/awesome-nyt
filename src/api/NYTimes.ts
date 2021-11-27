import { NYT_API_BASE_URL, NYT_API_KEY } from '../config';
import { NYTimesResponse, Article, ArticleResponse } from '../types';
import { parseArticle } from '../lib/parseArticle';

const RESULT_PER_REQUEST = 10;

export async function searchArticles(
  searchTerm: string,
  page = 0
): Promise<{ articles: Article[]; totalPage: number }> {
  const response = await fetch(
    `${NYT_API_BASE_URL}/articlesearch.json?q=${searchTerm}&page=${page}&api-key=${NYT_API_KEY}`
  );

  const result = (await response.json()) as NYTimesResponse<ArticleResponse>;

  if (result.status !== 'OK') {
    console.error(result);
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const articles = result.response.docs.map(parseArticle);

  return {
    articles,
    totalPage: Math.ceil(result.response.meta.hits / RESULT_PER_REQUEST),
  };
}
