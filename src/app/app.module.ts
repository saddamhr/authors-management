import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { BlockModule } from './block/block.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
imports: [
    BrowserModule,
    AppRoutingModule,
    BlockModule,
    FeaturesModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
