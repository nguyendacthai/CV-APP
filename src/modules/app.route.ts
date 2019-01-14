import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { Routes, RouterModule } from '@angular/router';

// Application routes configuration.
const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/login'
    },
    {
      path: 'login',
      loadChildren: './account/account.module#AccountModule'
    },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    // {
    //   path: 'category-group',
    //   loadChildren: 'modules/category-group/category-group.module#CategoryGroupModule'
    // }
  ]
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRouteModule { }
