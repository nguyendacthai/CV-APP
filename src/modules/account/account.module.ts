import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AppSharedModule} from '../shared/app-shared.module';
import {AccountRouteModule} from './account.route';
import {NgxCaptchaModule} from 'ngx-captcha';
import {RegisterAccountComponent} from './user-management/register-account.component';
import {MomentModule} from 'ngx-moment';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../factories/ngx-translate.factory';
import {HttpClient} from '@angular/common/http';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {InputsModule} from '@progress/kendo-angular-inputs';

//#region Module declaration

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccountRouteModule,
        AppSharedModule,
        NgxCaptchaModule,
        MomentModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        DateInputsModule,
        InputsModule
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
