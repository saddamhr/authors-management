import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';
// import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [AuthorComponent],
  exports: [AuthorComponent],
  imports: [CommonModule],
})
export class SharedModule {}
