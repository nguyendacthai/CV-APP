import {Inject, Component, OnInit, ViewChild} from '@angular/core';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-localstorage';
import { FormBuilder, Validators, FormGroup, NgForm} from '@angular/forms';

import {IUserService} from '../../../interfaces/services/user-service.interface';

import {ToastrService} from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import {RegisterAccountViewModel} from '../../../view-models/account/user-management/register-account.view-model';

@Component({
    selector: 'app-register-account',
    templateUrl: './register.account.component.html',
    styleUrls: ['./register.account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

    //#region Properties

    @BlockUI()
    private blockUiService: NgBlockUI;

    // Basic login form
    @ViewChild('registerAccountForm')
    private readonly _registerAccountForm: NgForm;

    /*
      * Model for 2-way data binding.
      *
      * */
    public registerAccountModel: RegisterAccountViewModel;

    //#endregion

    //#region Constructor

    constructor(@Inject('IUserService') public userService: IUserService,
                public router: Router,
                private localStorageService: LocalStorageService,
                private toastr: ToastrService) {
        this.registerAccountModel = new RegisterAccountViewModel();
    }

    //#endregion

    //#region Methods

    ngOnInit() {

    }


    public onSaveAccount(event: Event): void {

        if (event) {
            event.preventDefault();
        }

        if (!this._registerAccountForm) {
            return;
        }

        if (this._registerAccountForm.invalid) {
            return;
        }

        // // Block the UI.
        this.blockUiService.start();

        // this.userService
        //     .basicLogin(this.loginModel)
        //     .pipe(
        //         finalize(() => {
        //             this.blockUiService.stop();
        //         })
        //     )
        //     .subscribe((model: TokenViewModel) => {
        //         // Store local storage
        //         this.localStorageService.set(LocalStorageKeyConstant.accessToken, model.code);
        //
        //         // Send toastr message
        //         this.toastr.success(MessageSentSuccessfullyConstant.loginMessage, MessageSentSuccessfullyConstant.loginTitle);
        //
        //         // Redirect to dashboard.
        //         return this.router.navigate(['/dashboard']);
        //     });
    }

    //#endregion

}
