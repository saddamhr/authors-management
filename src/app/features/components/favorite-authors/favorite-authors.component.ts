import { DataStoreService } from './../../../core/services/data-store.service';
import { Author } from './../../../core/model/author.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css']
})
export class FavoriteAuthorsComponent implements OnInit {
  favoriteAuthors: Author[] = [];

  constructor(private dataStoreService:DataStoreService) { }

  ngOnInit(): void {
    this.favoriteAuthors =  this.dataStoreService.getCart()
  }

}
