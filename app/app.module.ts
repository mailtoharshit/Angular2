import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navbar } from './navbar';

@NgModule({
  imports: [BrowserModule],
  declarations: [navbar],
  bootstrap: [navbar]
})
export class AppModule { }
