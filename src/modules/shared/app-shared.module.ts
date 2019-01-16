import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthorizeLayoutComponent} from './authorize-layout/authorize-layout.component';
import {UnauthorizedLayoutComponent} from './unauthorized-layout/unauthorized-layout.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';

// import {BsDropdownModule} from 'ngx-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {MomentModule} from 'ngx-moment';
import {DateTimePickerComponent} from './date-time-picker/date-time-picker.component';


//#region Module declaration

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MomentModule,
        TranslateModule
    ],
    exports: [
        AuthorizeLayoutComponent,
        UnauthorizedLayoutComponent,
        SideBarComponent,
        NavigationBarComponent,
        DateTimePickerComponent
    ],
    declarations: [
        AuthorizeLayoutComponent,
        UnauthorizedLayoutComponent,
        SideBarComponent,
        NavigationBarComponent,
        DateTimePickerComponent
    ]
})

export class AppSharedModule {
}

//#endregion
