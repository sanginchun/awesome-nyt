import { makeAutoObservable } from 'mobx';
import { Article } from '../types';

class Bookmark {
  state: { [key: string]: { article: Article; bookmarkedAt: number } } = {};

  constructor() {
    makeAutoObservable(this);
  }

  addBookmark(article: Article) {
    this.state[article._id] = { article, bookmarkedAt: Date.now() };
  }

  removeBookmark(id: string) {
    delete this.state[id];
  }
}

export default new Bookmark();
