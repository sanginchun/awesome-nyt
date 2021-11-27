import { autorun, makeAutoObservable } from 'mobx';
import { Article, BookmarkState } from '../types';
import { BOOKMARK_STATE_KEY } from '../config';
import { getLocalStorage } from '../localStorage';

class Bookmark {
  state: BookmarkState = getLocalStorage(BOOKMARK_STATE_KEY) || {};

  constructor() {
    makeAutoObservable(this);

    autorun(() =>
      localStorage.setItem(BOOKMARK_STATE_KEY, JSON.stringify(this.state))
    );
  }

  addBookmark(article: Article) {
    this.state[article._id] = { article, bookmarkedAt: Date.now() };
  }

  removeBookmark(id: string) {
    delete this.state[id];
  }
}

export default new Bookmark();
