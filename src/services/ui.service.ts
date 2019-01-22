import {Injectable} from '@angular/core';
import {IUIService} from '../interfaces/services/ui-service.interface';

declare var $: any;

@Injectable()
export class UIService implements IUIService {
  //#region Methods

  public toggleMenuItem() {
    try {
      var menu = $('.js-item-menu');
      var sub_menu_is_showed = -1;

      for (let i = 0; i < menu.length; i++) {
        $(menu[i]).on('click', function (e) {
          debugger
          e.preventDefault();   
          if ($.inArray(this, menu) == sub_menu_is_showed) {
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = -1;
          }
          else {
            for (var i = 0; i < menu.length; i++) {
              $(menu[i]).removeClass("show-dropdown");
            }
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = $.inArray(this, menu);
          }
        });
      }

      $(".js-item-menu, .js-dropdown").click(function (event) {
        event.stopPropagation();
      });
  
      $("body,html").on("click", function () {
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
      });
  
    } catch (error) {
      console.log(error);
    }
  }

  // Toggle sub-menu
  public toggleSidebar() {
    const arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      // that.on('click', function (e) {
      //   e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      // });
    });
  }

  //#endregion
}

