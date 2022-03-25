import { FavoriteAuthorsComponent } from './favorite-authors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'favorite-authors', component: FavoriteAuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteAuthorsRoutingModule {}
