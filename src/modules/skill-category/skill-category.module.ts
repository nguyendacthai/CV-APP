import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {AppSharedModule} from '../shared/app-shared.module';

import {SkillCategoryDetailComponent} from './skill-category-detail/skill-category-detail.component';
import {SkillCategoryListingComponent} from './skill-category-listing/skill-category-listing.component';
import {SkillCategoryRouteModule} from './skill-category.route';

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    AppSharedModule,  // Inject app-shared.module.ts (Authorize layout)
    SkillCategoryRouteModule  // Inject route of skill category
  ],
  exports: [
    SkillCategoryDetailComponent,
    SkillCategoryListingComponent
  ],
  declarations: [
    SkillCategoryDetailComponent,
    SkillCategoryListingComponent
  ]
})

export class SkillCategoryModule {
}

//#endregion
