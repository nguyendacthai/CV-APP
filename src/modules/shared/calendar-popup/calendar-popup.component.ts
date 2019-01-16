import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Subject} from 'rxjs';

@Component({
    selector: 'calendar-popup',
    templateUrl: 'calendar-popup.component.html',
    styleUrls: ['calendar-popup.component.scss']
})
export class CalendarPopupComponent {

    //#region Properties

    // Date which is initially selected.
    public date: Date = new Date();

    // Emit when date is set.
    public onDateSet: Subject<Date>;

    //#endregion

    //#region Constructor

    public constructor(private bsModalRef: BsModalRef) {
        this.onDateSet = new Subject<Date>();
    }


    //#endregion

    //#region Methods

    // Called when date is set.
    public ngOnDateSet(): void {
        this.onDateSet
            .next(this.date);

        // Close modal.
        this.bsModalRef
            .hide();
    }

    // Called when cancel is clicked.
    public ngOnCancelClicked(): void {
        this.bsModalRef.hide();
    }

    //#endregion
}
