import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProlibModule } from 'prolib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
