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

export interface Article {
  _id: string;
  web_url: string;
  lead_paragraph: string;
  headline: { main: string };
  multimedia: Multimedia[];
}

interface Multimedia {
  subtype: string;
  url: string;
  type: string;
  width: number;
  height: number;
}

export interface BookmarkState {
  [key: string]: { article: Article; bookmarkedAt: number };
}
