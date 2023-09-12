import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* app root*/
import { AppComponent } from './app.component';

import { PageComponent } from '../component/page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
