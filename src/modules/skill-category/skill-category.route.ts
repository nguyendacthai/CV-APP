import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthorizeLayoutComponent} from '../shared/authorize-layout/authorize-layout.component';
// import {IsAuthorizedGuard} from '../../guards/is-authorized-guard';

import {SkillCategoryDetailComponent} from './skill-category-detail/skill-category-detail.component';
import {SkillCategoryListingComponent} from './skill-category-listing/skill-category-listing.component';

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AuthorizeLayoutComponent,
    // canActivate: [IsAuthorizedGuard],
    // resolve: {
    //   profile: ProfileResolve
    // },
    children: [
      {
        path: 'add-new',
        component: SkillCategoryDetailComponent,
        pathMatch: 'full'
      },
      {
        path: 'listing',
        component: SkillCategoryListingComponent,
        pathMatch: 'full'
      }
    ]
  }
];


//#endregion

//#region Module configuration

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillCategoryRouteModule {
}

//#endregion
