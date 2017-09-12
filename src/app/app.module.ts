import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from 'app/directory/directory.component';
import { HttpHandler } from "@angular/common/http";
import { DnnSxcModule } from "@2sic.com/dnn-sxc-angular";
import { HttpClientModule } from "@angular/common/http";

const appRoutes = [
  {
    path: 'filter/:department/:letter',
    component: DirectoryComponent
  },
  {
    path: '',
    redirectTo: 'filter/alle/alle',
    pathMatch: 'full'
  },
  {
    path: 'search/:needle',
    component: DirectoryComponent
  }
]

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
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
