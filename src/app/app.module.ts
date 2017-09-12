import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { HttpHandler } from "@angular/common/http";
import { DnnSxcModule } from "@2sic.com/dnn-sxc-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutes } from "app/app.routes";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DnnSxcModule,     // DnnSxc module ensures all connectors are available
    HttpClientModule, // important - this changed in Angular 4.3
    BrowserModule,
    FormsModule,
    DirectoryModule,
    RouterModule.forRoot(AppRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
