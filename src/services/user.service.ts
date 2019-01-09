import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IUserService} from '../interfaces/services/user-service.interface';
import {LoginViewModel} from '../view-models/account/login.view-model';
import {TokenViewModel} from '../view-models/account/token.view-model';

import {ConfigUrlService} from '../constants/config-url-service.constant';
import {ConfigUrlUserService} from '../constants/config-url-user-service.constant';


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

  //#endregion


}
