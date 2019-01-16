import {Observable} from 'rxjs';
import {LoginViewModel} from '../../view-models/account/login.view-model';
import {TokenViewModel} from '../../view-models/account/token.view-model';
import {RegisterAccountViewModel} from '../../view-models/account/user-management/register-account.view-model';
import {User} from '../../models/entity/user';

export interface IUserService {
  //#region Methods

  // Exchange username & password with access token.
  basicLogin(model: LoginViewModel): Observable<TokenViewModel>;

  // create account
  createAccount(model: RegisterAccountViewModel): Observable<User>;

  //#endregion
}
