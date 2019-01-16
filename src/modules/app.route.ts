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
    {
      path: 'skill-category',
      loadChildren: './skill-category/skill-category.module#SkillCategoryModule'
    }
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
