import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {MomentModule} from 'ngx-moment';

// Application routes configuration.
const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      loadChildren: './account/account.module#AccountModule'
    },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
      path: 'skill-category',
      loadChildren: './skill-category/skill-category.module#SkillCategoryModule'
    },
    {
      path: '**',
      redirectTo: '/login'
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
