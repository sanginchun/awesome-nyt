export interface NYTimesResponse<T> {
  status: string;
  response: {
    docs: T[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

export interface ArticleResponse {
  _id: string;
  web_url: string;
  lead_paragraph: string;
  headline: { main: string };
  multimedia: Multimedia[];
}

export interface Multimedia {
  subtype: string;
  url: string;
  type: string;
  width: number;
  height: number;
}

export interface IArticle {
  id: string;
  url: string;
  title: string;
  content: string;
  thumbnail?: string;
}

export interface BookmarkState {
  [key: string]: { article: IArticle; bookmarkedAt: number };
}
