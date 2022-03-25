import { FavoriteAuthorsComponent } from './features/components/favorite-authors/favorite-authors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './features/components/authors/authors.component';

const routes: Routes = [
  { path: '', component: AuthorsComponent },
  // Lazy loaded route,
  {
    path: '',
    component: FavoriteAuthorsComponent,
    loadChildren: () =>
      import('../app/features/features.module').then(
        (module) => module.FeaturesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
