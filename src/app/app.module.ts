import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from "app/directory/directory.component";
import { SxcAngular, DnnHttpProvider, DnnAngular, ContentResourceFactory } from "@2sic.com/dnn-sxc-angular";

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
    BrowserModule,
    FormsModule,
    HttpModule,
    DirectoryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SxcAngular,
    DnnAngular,
    DnnHttpProvider,
    ContentResourceFactory,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
