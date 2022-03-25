import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BlockModule } from './block/block.module';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialExampleModule,
    AppRoutingModule,
    BlockModule,
    FeaturesModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  // bootstrap: [SnackBarPositionExample],
})
export class AppModule {}
