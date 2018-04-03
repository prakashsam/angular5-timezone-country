import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    KeysPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
