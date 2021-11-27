import { makeAutoObservable } from 'mobx';

class SearchTerm {
  state = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSearchTerm(searchTerm: string) {
    this.state = searchTerm;
  }
}

export default new SearchTerm();
