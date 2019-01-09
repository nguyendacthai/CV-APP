import {Observable} from 'rxjs';
import {LoginViewModel} from '../../view-models/account/login.view-model';
import {TokenViewModel} from '../../view-models/account/token.view-model';

export interface IUserService {
  //#region Methods

  // Exchange username & password with access token.
  basicLogin(model: LoginViewModel): Observable<TokenViewModel>;

  //#endregion
}
