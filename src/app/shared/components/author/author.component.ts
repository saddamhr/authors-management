import { DataStoreService } from './../../../core/services/data-store.service';
import { Author } from './../../../core/model/author.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  // @Input() a: Author[]
  @Input() author: any;

  constructor(private dataStoreService:DataStoreService) {}

  ngOnInit(): void {}

  handleFavoriteAuthorAdd(author:Author){
    this.dataStoreService.addFavoriteAuthors(author)
  }
  handleFavoriteAuthorRemove(authorId:string){
    this.dataStoreService.removeAuthor(authorId)
  }
}
