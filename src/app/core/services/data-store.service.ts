import { Author } from './../model/author.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  authorFromLocalStorage: Author[] = [];

  constructor() {}

  getAuthors() {
    this.authorFromLocalStorage = JSON.parse(
      localStorage.getItem('cartItems')!
    );
    if (this.authorFromLocalStorage === null) {
      this.authorFromLocalStorage = [];
    }
    return this.authorFromLocalStorage;
  }

  addFavoriteAuthors(author: Author) {
    let j = 0;

    // get current cart
    this.authorFromLocalStorage = JSON.parse(
      localStorage.getItem('cartItems')!
    );

    if (this.authorFromLocalStorage === null) {
      this.authorFromLocalStorage = [];
    }
    for (j = 0; j < this.authorFromLocalStorage.length; j++) {
      if (author._id === this.authorFromLocalStorage[j]._id) {
        break;
      } else {
        continue;
      }
    }

    if (j === this.authorFromLocalStorage.length) {
      this.authorFromLocalStorage.push(author);
    }

    localStorage.setItem(
      'cartItems',
      JSON.stringify(this.authorFromLocalStorage)
    );
  }

  removeAuthor(authorId: string) {
    const items = JSON.parse(localStorage.getItem('cartItems')!);
    const filtered = items.filter((item:any) => item._id !== authorId);
    localStorage.setItem('cartItems', JSON.stringify(filtered));


  }
}
