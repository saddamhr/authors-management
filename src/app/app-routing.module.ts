import { FavoriteAuthorsComponent } from './features/components/favorite-authors/favorite-authors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './features/components/authors/authors.component';

const routes: Routes = [
  { path: '', component: AuthorsComponent },
  { path: 'favorite-authors', component: FavoriteAuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
