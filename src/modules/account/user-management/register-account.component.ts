import {Inject, Component, OnInit, ViewChild} from '@angular/core';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-localstorage';
import {FormBuilder, Validators, FormGroup, NgForm} from '@angular/forms';

import {IUserService} from '../../../interfaces/services/user-service.interface';

import {ToastrService} from 'ngx-toastr';
import {RegisterAccountViewModel} from '../../../view-models/account/user-management/register-account.view-model';
import {finalize} from 'rxjs/operators';
import {MessageSentConstant} from '../../../constants/message-sent-successfully.constant';

@Component({
    selector: 'app-register-account',
    templateUrl: './register-account.component.html',
    styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

    //#region Properties

    @BlockUI()
    private blockUiService: NgBlockUI;

    @ViewChild('registerAccountForm')
    private readonly _registerAccountForm: NgForm;

    /*
      * Model for 2-way data binding.
      *
      * */
    public registerAccountModel: RegisterAccountViewModel;

    private _birthday: Date;
    public get birthday(): Date {
        return this._birthday;
    }

    public set birthday(value: Date) {
        this._birthday = value;
        if (value) {
            this.registerAccountModel
                .birthday = value.getTime();
        }
    }

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

        this.userService
            .createAccount(this.registerAccountModel)
            .pipe(
                finalize(() => {
                    this.blockUiService.stop();
                })
            )
            .subscribe(() => {
                // Store local storageL
                // Send toastr message
                this.toastr.success(MessageSentConstant.registerAccountSuccess, MessageSentConstant.registerAccountTitle);
                // Redirect to dashboard.
                return this.router.navigate(['/login']);
            });
    }

    //#endregion

}
