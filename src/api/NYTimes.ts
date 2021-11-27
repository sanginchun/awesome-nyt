import { NYT_API_BASE_URL, NYT_API_KEY } from '../config';
import { NYTimesResponse, Article } from '../types';

const RESULT_PER_REQUEST = 10;

export async function searchArticles(
  searchTerm: string,
  page = 0
): Promise<{ articles: Article[]; totalPage: number }> {
  const response = await fetch(
    `${NYT_API_BASE_URL}/articlesearch.json?q=${searchTerm}&page=${page}&api-key=${NYT_API_KEY}`
  );

  const result = (await response.json()) as NYTimesResponse<Article>;

  if (result.status !== 'OK') {
    console.error(result);
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return {
    articles: result.response.docs,
    totalPage: Math.ceil(result.response.meta.hits / RESULT_PER_REQUEST),
  };
}
