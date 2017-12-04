import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContentManagerModule } from '@2sic.com/dnn-sxc-angular';
import { DirectoryModule } from './directory/directory.module';
import { DnnSxcModule } from '@2sic.com/dnn-sxc-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseProvider } from './route-reuse-strategy';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DnnSxcModule,
    DirectoryModule,
    AppRoutingModule  // always have this as the very last import! - https://angular.io/guide/router#module-import-order-matters
  ],
  providers: [
    RouteReuseProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
