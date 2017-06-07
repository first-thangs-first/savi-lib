import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { ViewController, Modal, ModalController, NavParams } from 'ionic-angular';
import { PopoverController, NavParams } from 'ionic-angular';
import { DatePickerCalendar } from '../date-picker-calendar/date-picker-calendar.component';

@Component({
  selector: 'date-picker',
  template: `
<div id="date-picker-input-container" (click)="showDatePicker($event)">
  <span class="date-picker-date-display">{{ selectedDate }}</span>
  <ion-icon name="calendar" isActive="false"></ion-icon>
</div>
  `
})
export class DatePicker {
  @Input()
  selectedDate;
  calendar;
  constructor (private popoverCtrl: PopoverController,
               public navParams: NavParams,) {
    this.calendar = DatePickerCalendar;
  }

  showDatePicker(clickEvent){
    console.log("show datepicker", this.selectedDate);
    let popover = this.popoverCtrl.create(this.calendar, {'selectedDate': this.selectedDate});
    popover.present();
  }
}