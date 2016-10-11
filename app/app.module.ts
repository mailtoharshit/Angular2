import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { onloadComponent } from './onload';
import { navbarComponent } from './navbar';

@NgModule({
  imports: [BrowserModule, onloadComponent, navbarComponent],
  declarations: [AppComponent, onloadComponent, navbarComponent],
  bootstrap: [AppComponent, onloadComponent, navbarComponent]
})
export class AppModule { }
