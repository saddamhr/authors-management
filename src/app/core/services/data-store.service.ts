import { SnackbarService } from './snackbar.service';
import { Author } from './../model/author.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  authorFromLocalStorage: Author[] = [];

  constructor(private _snackbarService: SnackbarService) {}

  // SERVICE METHOD: to get all author from local storage
  getAuthors() {
    this.authorFromLocalStorage = JSON.parse(localStorage.getItem('authors')!);
    if (this.authorFromLocalStorage === null) {
      this.authorFromLocalStorage = [];
    }
    return this.authorFromLocalStorage;
  }

  // SERVICE METHOD: add author to the local storage
  addFavoriteAuthors(author: Author) {
    let j = 0;

    // get currently added author from local storage
    this.authorFromLocalStorage = JSON.parse(localStorage.getItem('authors')!);

    // null case check
    if (this.authorFromLocalStorage === null) {
      this.authorFromLocalStorage = [];
    }

    // check author already added or not
    for (j = 0; j < this.authorFromLocalStorage.length; j++) {
      if (author._id === this.authorFromLocalStorage[j]._id) {
        this._snackbarService.success(
          `Author ${author.name} already added to the favorite list! `
        );
        break;
      } else {
        continue;
      }
    }

    if (j === this.authorFromLocalStorage.length) {
      this.authorFromLocalStorage.push(author);
    }

    localStorage.setItem(
      'authors',
      JSON.stringify(this.authorFromLocalStorage)
    );
  }

  // SERVICE METHOD: to remove a author from local storage
  removeAuthor(authorId: string) {
    const items = JSON.parse(localStorage.getItem('authors')!);
    const filtered = items.filter((item: any) => item._id !== authorId);
    localStorage.setItem('authors', JSON.stringify(filtered));
  }
}
