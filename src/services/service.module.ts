import {NgModule, ModuleWithProviders} from '@angular/core';
import {UIService} from './ui.service';
import {UserService} from './user.service';

@NgModule({})

export class ServiceModule {

  //#region Methods

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        {provide: 'IUIService', useClass: UIService},
        {provide: 'IUserService', useClass: UserService},
        {provide: Window, useValue: window}
      ]
    };
  }

  //#endregion
}


