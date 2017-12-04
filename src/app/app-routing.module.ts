import { DirectoryComponent } from './directory/directory.component';
import { NgModule } from '@angular/core';
import { RouteReuseSameStrategy } from './route-reuse-strategy';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'list/:department/:letter',
    component: DirectoryComponent
  },
  {
    path: 'search/:needle',
    component: DirectoryComponent
  },
  {
    path: '**',
    redirectTo: 'list/all/all',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    RouteReuseSameStrategy
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
