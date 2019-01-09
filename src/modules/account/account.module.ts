import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AppSharedModule} from '../shared/app-shared.module';
import {AccountRouteModule} from './account.route';
import { NgxCaptchaModule } from 'ngx-captcha';

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
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})

export class AccountModule {
}

//#endregion
