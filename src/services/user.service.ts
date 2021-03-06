import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IUserService} from '../interfaces/services/user-service.interface';
import {LoginViewModel} from '../view-models/account/login.view-model';
import {TokenViewModel} from '../view-models/account/token.view-model';

import {ConfigUrlService} from '../constants/config-url-service.constant';
import {ConfigUrlUserService} from '../constants/config-url-user-service.constant';
import {RegisterAccountViewModel} from '../view-models/account/user-management/register-account.view-model';
import {User} from '../models/entity/user';


@Injectable()
export class UserService implements IUserService {
  //#region Properties

  //#endregion

  //#region Constructor

  /*
  * Initiate service with injectors.
  * */
  public constructor(public httpClient: HttpClient) {
  }

  //#endregion

  //#region Methods

  public basicLogin(model: LoginViewModel): Observable<TokenViewModel> {
    const url = `${ConfigUrlService.urlApi}/${ConfigUrlUserService.login}`;
    return this.httpClient
      .post<TokenViewModel>(url, model);
  }

  public createAccount(model: RegisterAccountViewModel): Observable<User> {
    const url = `${ConfigUrlService.urlApi}/${ConfigUrlUserService.createAccount}`;
    return this.httpClient
        .post<User>(url, model);
  }

  //#endregion


}
