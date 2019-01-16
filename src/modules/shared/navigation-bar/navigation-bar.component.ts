///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, Inject } from '@angular/core';
import {UIService} from '../../../services/ui.service';

declare var $: any;

@Component({
  selector: 'navigation-bar',
  templateUrl: 'navigation-bar.component.html',
})
export class NavigationBarComponent {

  toggle_account: boolean = true;

  //#region Constructors

  public constructor(@Inject('IUIService') public uiService: UIService) {

  }

  //#endregion

  //#region Methods

  public Toggle() {

    return this.toggle_account = !this.toggle_account;
    
  }

  // public toggleMenuItem() {
    
  //   debugger
  //   this.uiService.toggleMenuItem();
    
  // }

  //#endregion

}
