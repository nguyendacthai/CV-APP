///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject} from '@angular/core';
import {RouterLinkConstant} from '../../../constants/router-link.constant';

import {UIService} from '../../../services/ui.service';

declare var $: any;

@Component({
  selector: 'side-bar',
  templateUrl: 'side-bar.component.html'
})
export class SideBarComponent {
  //#region Properties

  /*
    * Model for 2-way data binding.
    * */
  public routerLink: RouterLinkConstant;

  //#endregion

  //#region Constructors

  public constructor(@Inject('IUIService') public uiService: UIService) {
    this.routerLink = new RouterLinkConstant();
  }

  //#endregion

  //#region Methods

  public toggleSidebar() {
    this.uiService.toggleSidebar();
  }

  //#endregion

}

