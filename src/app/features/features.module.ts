import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './components/authors/authors.component';
import { FavoriteAuthorsComponent } from './components/favorite-authors/favorite-authors.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AuthorsComponent,
    FavoriteAuthorsComponent
  ],
  exports: [
    AuthorsComponent,
    FavoriteAuthorsComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class FeaturesModule { }
