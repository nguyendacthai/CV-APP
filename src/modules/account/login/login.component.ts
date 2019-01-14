import {Inject, Component, OnInit, ViewChild} from '@angular/core';
import {LoginViewModel} from '../../../view-models/account/login.view-model';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-localstorage';
import { FormBuilder, Validators, FormGroup, NgForm} from "@angular/forms";

import {IUserService} from '../../../interfaces/services/user-service.interface';
import {TokenViewModel} from '../../../view-models/account/token.view-model';
import {LocalStorageKeyConstant} from '../../../constants/local-storage-key.constant';

import {MessageSentConstant} from '../../../constants/message-sent-successfully.constant';

import {ToastrService} from 'ngx-toastr';
import { ReCaptchaV3Service, InvisibleReCaptchaComponent } from 'ngx-captcha';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //#region Properties

  @BlockUI()
  private blockUiService: NgBlockUI;

  // Basic login form
  @ViewChild('basicLoginForm')
  private readonly _basicLoginForm: NgForm;

  @ViewChild('invisibleCaptcha')
  private readonly _invisibleCaptcha: InvisibleReCaptchaComponent;

  /*
    * Model for 2-way data binding.
    * 
    * */
  public loginModel: LoginViewModel;

  //#endregion

  //#region Constructor

  constructor(@Inject('IUserService') public userService: IUserService,
              public router: Router,
              private localStorageService: LocalStorageService,
              private toastr: ToastrService,
              private reCaptchaV3Service: ReCaptchaV3Service) {
    this.loginModel = new LoginViewModel();
  }

  //#endregion

  //#region Methods

  ngOnInit() {
   
  }

  handleSuccess(captchaResponse: string): void {
    this.loginModel.captchaCode = captchaResponse;
  }


  public basicLogin(event: Event): void {

    if (event) {
      event.preventDefault();
    }

    if (!this._basicLoginForm) {
      return;
    }

    if (this._basicLoginForm.invalid) {
      return;
    }

    this.router.navigate(['/dashboard']);

    // // // Block the UI.
    // this.blockUiService.start();

    // // Get the invisible captcha code.
    // this._invisibleCaptcha.execute();

        this.toastr.success(MessageSentConstant.loginMessage, MessageSentConstant.loginTitle);
    // console.log(this.loginModel);
    // this.userService
    //   .basicLogin(this.loginModel)
    //   .pipe(
    //     finalize(() => {
    //       this.blockUiService.stop();
    //     })
    //   )
    //   .subscribe((model: TokenViewModel) => {
    //     // Store local storage
    //     this.localStorageService.set(LocalStorageKeyConstant.accessToken, model.code);

    //     // Send toastr message
    //     this.toastr.success(MessageSentConstant.loginMessage, MessageSentConstant.loginTitle);

    //     // Redirect to dashboard.
    //     return this.router.navigate(['/dashboard']);
    //   });
  }

  //#endregion
  
}
