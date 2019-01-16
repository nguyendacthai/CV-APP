import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppRouteModule} from './app.route';
import {AppComponent} from './app.component';

import {ServiceModule} from '../services/service.module';
import {AppSharedModule} from './shared/app-shared.module';

import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {GlobalHttpInterceptor} from './../interceptors/global-http-interceptor';
import {NgxLocalStorageModule} from 'ngx-localstorage';
// import {GuardModule} from '../guards/guard.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr/';

import {BlockUIModule} from 'ng-block-ui';

import { NgxCaptchaModule } from 'ngx-captcha';
import { SkillCategoryDetailComponent } from './skill-category/skill-category-detail/skill-category-detail.component';
import { SkillCategoryListingComponent } from './skill-category/skill-category-listing/skill-category-listing.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required animation module (ex: for toastr)
    ToastrModule.forRoot(), // TOASTR register
    BlockUIModule.forRoot(),  // Block ui register
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxCaptchaModule, // Captcha code

    // Application modules.
    ServiceModule.forRoot(),
    NgxLocalStorageModule.forRoot(),
    // GuardModule.forRoot(),
    AppSharedModule,  // Include: Unauthorized layout(login page) and Authorize layout(Sidebar + Navigation bar)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  // declarations: [SkillCategoryDetailComponent, SkillCategoryListingComponent]
})
export class AppModule {
}


