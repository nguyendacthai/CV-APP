import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {DashboardRouteModule} from './dashboard.route';
import {AppSharedModule} from '../shared/app-shared.module';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';

//#region Routes declaration


//#endregion

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppSharedModule,
    DashboardRouteModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {
}

//#endregion
