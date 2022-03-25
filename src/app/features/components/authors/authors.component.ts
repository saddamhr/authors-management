import { SnackbarService } from './../../../core/services/snackbar.service';
import { Author, Data } from './../../../core/model/author.model';
import { AuthorService } from './../../../core/services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  p: number = 1;
  total: number = 0;
  loading:boolean = true

  constructor(
    private _authorService: AuthorService,
    private _snackbarService: SnackbarService
  ) {}
  ngOnInit(): void {
    // initial call 
    this.getAuthors(0);
  }

  // get authors 
  getAuthors(page: number) {
    const skip = page === 0 ? 0 : (page - 1) * 10;
    this._authorService.fetchAuthors(10, skip).subscribe(
      (data: Data) => {
        this.authors = data.results;
        this.total = data.totalCount;
        this.loading = false
      },
      (error: any) => {
        console.log(error);
        this._snackbarService.success(
          'An error occurred in the server',
          'red-snackbar'
        );
        this.loading = false
      }
    );
  }

  // pagination page change 
  pageChangeEvent(event: number) {
    console.log(event);
    this.p = event;
    this.getAuthors(this.p);
  }
}
