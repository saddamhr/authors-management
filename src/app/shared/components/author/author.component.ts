import { SnackbarService } from './../../../core/services/snackbar.service';
import { DataStoreService } from './../../../core/services/data-store.service';
import { Author } from './../../../core/model/author.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  // @Input() a: Author[]
  @Input() author: any;
  @Output() favoriteAuthorRemoveEvent = new EventEmitter();

  constructor(
    private _dataStoreService: DataStoreService,
    private _snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  handleFavoriteAuthorAdd(author: Author) {
    this._dataStoreService.addFavoriteAuthors(author);
    this._snackbarService.success('Author Successfully added');
  }
  handleFavoriteAuthorRemove(authorId: string) {
    this._dataStoreService.removeAuthor(authorId);
    this.favoriteAuthorRemoveEvent.emit();
    this._snackbarService.success('Successfully removed author!');
  }
}
