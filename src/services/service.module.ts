import {NgModule, ModuleWithProviders} from '@angular/core';
import {UserService} from './user.service';

@NgModule({})

export class ServiceModule {

  //#region Methods

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        {provide: 'IUserService', useClass: UserService},
        {provide: Window, useValue: window}
      ]
    };
  }

  //#endregion
}


