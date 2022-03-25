import { SnackbarService } from './../../../core/services/snackbar.service';
import { DataStoreService } from './../../../core/services/data-store.service';
import { Author } from './../../../core/model/author.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  @Input() author: any;
  @Input() component: string;

  @Output() favoriteAuthorRemoveEvent = new EventEmitter();

  constructor(
    private _dataStoreService: DataStoreService,
    private _snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}
  
  // METHOD: this method will call when user click in the 'Add Favt' button 
  handleFavoriteAuthorAdd(author: Author) {
    this._dataStoreService.addFavoriteAuthors(author);
  }

  // METHOD: this method will call when user click in the 'Remove Favt' button 
  handleFavoriteAuthorRemove(author: Author) {
    this._dataStoreService.removeAuthor(author._id);
    // EVENT EMITTER: emit event for update storage immediately
    this.favoriteAuthorRemoveEvent.emit();
    this._snackbarService.success(
      `Author ${author.name} successfully removed!`,
      'red-snackbar'
    );
  }
}
