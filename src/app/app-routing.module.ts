import { Routes, RouterModule } from "@angular/router";
import { DirectoryComponent } from "app/directory/directory.component";
import { NgModule } from "@angular/core";
import { RouteReuseSameStrategy } from "app/route-reuse-strategy";

const appRoutes: Routes = [
    {
      path: 'list/:department/:letter',
      component: DirectoryComponent
    },
    {
      path: '',
      redirectTo: 'list/all/all',
      pathMatch: 'full'
    },
    {
      path: 'search/:needle',
      component: DirectoryComponent
    },
    {
      path: 'list',
      component: DirectoryComponent
    },

  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
        // { enableTracing: true } // <-- debugging purposes only
      )
    ],
    providers: [
      RouteReuseSameStrategy
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}