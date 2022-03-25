import { MaterialExampleModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [AuthorComponent],
  exports: [AuthorComponent, MaterialExampleModule],
  imports: [CommonModule, MaterialExampleModule],
})
export class SharedModule {}
