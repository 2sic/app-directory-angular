import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SxcDataProvider, SxcHttpProvider } from '@2sic.com/dnn-sxc-angular';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from 'app/directory/directory.component';
<<<<<<< HEAD
import { SxcAngular, DnnAngular, DnnHttpProvider, ContentResourceFactory } from '@2sic.com/dnn-sxc-angular';
=======
>>>>>>> 4dda007d69375f780943edbc6afb2dc4396d0fad

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
    SxcDataProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
