import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormBuilder, Validators, FormGroup, NgForm } from "@angular/forms";
import { SkillCategoryViewModel } from 'src/view-models/skill-category/skill-category.view-model';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { ToastrService } from 'ngx-toastr';
import { MessageSentConstant } from 'src/constants/message-sent-successfully.constant';

@Component({
  selector: 'app-skill-category-detail',
  templateUrl: './skill-category-detail.component.html',
  styleUrls: ['./skill-category-detail.component.scss']
})
export class SkillCategoryDetailComponent implements OnInit {

  //#region Properties

  @BlockUI()
  private blockUiService: NgBlockUI;

  // Skill Category form
  @ViewChild('skillCategoryForm')
  private readonly _skillCategoryForm: NgForm;

  // Model for 2-way data binding.
  public skillCategoryModel: SkillCategoryViewModel;

  //#endregion

  //#region Constructors

  constructor(public router: Router,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService) {
    this.skillCategoryModel = new SkillCategoryViewModel();
  }

  //#endregion

  //#region Methods

  ngOnInit() {
  }

  public createSkillCategory(event: Event): void {

    if (event) {
      event.preventDefault();
    }

    if (!this._skillCategoryForm) {
      return;
    }

    if (this._skillCategoryForm.invalid) {
      return;
    }

    // // // Block the UI.
    // this.blockUiService.start();

        this.toastr.success(MessageSentConstant.createSuccessMessage, MessageSentConstant.createSuccessTitle);
  }

  //#endregion

}
