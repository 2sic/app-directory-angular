import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { HttpHandler } from "@angular/common/http";
import { DnnSxcModule } from "@2sic.com/dnn-sxc-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "app/app-routing.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DnnSxcModule,     // DnnSxc module ensures all connectors are available
    HttpClientModule, // important - this changed in Angular 4.3
    BrowserModule,
    DirectoryModule,
    AppRoutingModule
    // RouterModule.forRoot(AppRoutes, { enableTracing: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
