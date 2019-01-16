import {Component, forwardRef, Input} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CalendarPopupComponent} from '../calendar-popup/calendar-popup.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'date-time-picker',
    templateUrl: 'date-time-picker.component.html',
    styleUrls: ['date-time-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => DateTimePickerComponent),
        }
    ]
})
export class DateTimePickerComponent implements ControlValueAccessor {

    //#region Properties

    // Whether unix time format.
    @Input('unix-time-format')
    public ngUnixTimeModelFormat = false;

    // Calendar popup modal reference.
    private _calendarPopupModalRef: BsModalRef;

    // Model for information binding.
    private _date: Date | number | null = null;

    // Get date model.
    public get date(): Date | number | null {
        return this._date;
    }

    // Update date model.
    public set date(value: Date | number | null) {
        this._date = value;

        if (this._onChangeEvent) {
            this._onChangeEvent(this.loadModelFormat(value));
        }
    }

    // Whether component is disabled or not.
    private _ngIsDisabled = false;

    public get ngIsComponentDisabled(): boolean {
        return this._ngIsDisabled;
    }

    // Event which is used for firing component model changes.
    private _onChangeEvent = (_: any): void => {
    }


    //#endregion

    //#region Constructor

    public constructor(public bsModalService: BsModalService) {

    }


    //#endregion

    //#region Methods

    /*
    * Called when calendar is clicked.
    * */
    public ngOnCalendarIconClicked(): void {

        // Previous modal instance is changed.
        if (this._calendarPopupModalRef) {
            this._calendarPopupModalRef.hide();
        }

        this._calendarPopupModalRef = this.bsModalService
            .show(CalendarPopupComponent, {
                class: 'fit-content margin-left-auto margin-right-auto'
            });

        this._calendarPopupModalRef
            .content
            .onDateSet
            .subscribe((date: Date | null) => {
                this.date = date;
            });
    }

    /*
    * Called when onChange event is registered.
    * */
    public registerOnChange(fn: any): void {
        this._onChangeEvent = fn;
    }

    /*
    * Called when onTouch event is registered.
    * */
    public registerOnTouched(fn: any): void {
    }

    /*
    * Set component to enabled/disabled state.
    * */
    public setDisabledState(isDisabled: boolean): void {
        this._ngIsDisabled = isDisabled;
    }

    /*
    * Called when external component is written value to this component.
    * */
    public writeValue(obj: any): void {

        // Value is the same.
        if (this.date === obj) {
            return;
        }

        if (!obj) {
            this.date = null;
            return;
        }

        this.date = new Date(obj);
    }

    // Update date model.
    private loadModelFormat(obj: any): Date | number | null {
        if (this.ngUnixTimeModelFormat) {
            if (obj instanceof Date) {
                return (<Date>obj).getTime();
            }
        }
        return new Date(obj);
    }

    //#endregion

}
