import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; //It refers to .ts file
import  { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //You can have multiple modules in an App. Each module can have it's own *.component.ts, *.component.html, *.component.css
  ], //if This module needs to any other module then you to import it, and this is where you specify the module.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
