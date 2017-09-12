import { Routes } from "@angular/router/router";
import { DirectoryComponent } from "app/directory/directory.component";

export const AppRoutes: Routes = [
    {
      path: 'filter/:department/:letter',
      component: DirectoryComponent
    },
    {
      path: '',
      redirectTo: 'filter/all/all',
      pathMatch: 'full'
    },
    {
      path: 'search/:needle',
      component: DirectoryComponent
    }
  ];