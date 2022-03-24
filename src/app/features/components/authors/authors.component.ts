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
  // showConfig() {
  //   this.configService.getConfig()
  //     // clone the data object, using its known Config shape
  //     .subscribe((data: Config) => this.config = { ...data });
  // }
  ngOnInit(): void {
    this.getAuthors(0);
    // this.authorService.fetchAuthors(10, 20).subscribe(
    //   (data: Data) => {
    //     console.log(data);
    //     this.authors = data.results
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }

  getAuthors(page:number) {
    const skip = page === 0 ? 0 : (page-1) * 10
    this.authorService.fetchAuthors(10, skip).subscribe((data: Data) => {
      this.authors = data.results;
      this.total = data.totalCount;
    });
  }

  pageChangeEvent(event: number){
    console.log(event)
    this.p = event;
    this.getAuthors(this.p);
}


}
