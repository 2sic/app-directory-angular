import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from "app/directory/directory.component";
import { SxcHttpProvider } from "@2sic.com/sxc-angular/sxc-http.provider";
import { SxcAngularService } from "@2sic.com/sxc-angular/sxc-angular.service";
import { ContentResourceFactory } from "@2sic.com/sxc-angular/sxc-content.service";

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
    SxcHttpProvider,
    SxcAngularService,
    ContentResourceFactory,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
