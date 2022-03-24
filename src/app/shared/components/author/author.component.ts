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

  constructor() {}

  ngOnInit(): void {}
}
