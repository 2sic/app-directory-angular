import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DirectoryModule } from 'app/directory/directory.module';
import { AppComponent } from './app.component';
import { DnnSxcModule } from '@2sic.com/dnn-sxc-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'app/app-routing.module';
import { RouteReuseProvider } from 'app/route-reuse-strategy';

import { BetaEdit } from '@2sic.com/dnn-sxc-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DnnSxcModule,     // DnnSxc module ensures all connectors are available
    HttpClientModule, // important - this changed in Angular 4.3
    BrowserModule,
    DirectoryModule,
    AppRoutingModule  // always have this as the very last import! - https://angular.io/guide/router#module-import-order-matters
  ],
  providers: [
    RouteReuseProvider,
    BetaEdit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
