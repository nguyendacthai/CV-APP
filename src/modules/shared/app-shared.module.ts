import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// import {AuthorizeLayoutComponent} from './authorize-layout/authorize-layout.component';
import {UnauthorizedLayoutComponent} from './unauthorized-layout/unauthorized-layout.component';
// import {SideBarComponent} from './side-bar/side-bar.component';
// import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';

// import {BsDropdownModule} from 'ngx-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {DateTimePickerComponent} from './date-time-picker/date-time-picker.component';
import {CalendarPopupComponent} from './calendar-popup/calendar-popup.component';

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // BsDropdownModule.forRoot(),
    TranslateModule
  ],
  exports: [
    // AuthorizeLayoutComponent,
    UnauthorizedLayoutComponent,
    // SideBarComponent,
    // NavigationBarComponent,
    DateTimePickerComponent,
      CalendarPopupComponent
  ],
  declarations: [
    // AuthorizeLayoutComponent,
    UnauthorizedLayoutComponent,
    // SideBarComponent,
    // NavigationBarComponent,
    DateTimePickerComponent,
    CalendarPopupComponent
  ]
})

export class AppSharedModule {
}

//#endregion
