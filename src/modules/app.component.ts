import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //#region Constructor

  public constructor(private translate: TranslateService) {
    this._ngSetupAppLanguage();
  }

  // #endregion

  //#region Methods

  // Setup application language.
  private _ngSetupAppLanguage(): void {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

  // #endregion
  
}
