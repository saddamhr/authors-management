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

  constructor(private authorService: AuthorService) {}
  ngOnInit(): void {
    this.getAuthors(0);
  }

  getAuthors(page: number) {
    const skip = page === 0 ? 0 : (page - 1) * 10;
    this.authorService.fetchAuthors(10, skip).subscribe((data: Data) => {
      this.authors = data.results;
      this.total = data.totalCount;
    });
  }

  pageChangeEvent(event: number) {
    console.log(event);
    this.p = event;
    this.getAuthors(this.p);
  }
}
