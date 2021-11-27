import { NYT_API_BASE_URL, NYT_API_KEY } from '../config';
import { NYTimesResponse, Article } from '../types';

export async function searchArticles(
  searchTerm: string,
  page = 0
): Promise<Article[]> {
  const response = await fetch(
    `${NYT_API_BASE_URL}/articlesearch.json?q=${searchTerm}&page=${page}&api-key=${NYT_API_KEY}`
  );

  const result = (await response.json()) as NYTimesResponse<Article>;

  if (result.status !== 'OK') {
    console.error(result);
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return result.response.docs;
}
