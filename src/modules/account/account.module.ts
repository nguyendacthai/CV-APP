import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AppSharedModule} from '../shared/app-shared.module';
import {AccountRouteModule} from './account.route';
import { NgxCaptchaModule } from 'ngx-captcha';
import {RegisterAccountComponent} from './user-management/register.account.component';

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRouteModule,
    AppSharedModule,
    NgxCaptchaModule
  ],
  declarations: [
    LoginComponent,
    RegisterAccountComponent
  ],
  exports: [
    LoginComponent,
    RegisterAccountComponent
  ]
})

export class AccountModule {
}

//#endregion
