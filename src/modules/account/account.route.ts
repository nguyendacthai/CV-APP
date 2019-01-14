import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {UnauthorizedLayoutComponent} from '../shared/unauthorized-layout/unauthorized-layout.component';
import {RegisterAccountComponent} from './user-management/register.account.component';

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    component: UnauthorizedLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'register',
        pathMatch: 'full',
        component: RegisterAccountComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  }
];


//#endregion

//#region Module configuration

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRouteModule {
}

//#endregion
