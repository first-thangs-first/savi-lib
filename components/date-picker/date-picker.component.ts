import { Component, Output, EventEmitter } from '@angular/core';
// import { ViewController, Modal, ModalController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { DatePickerCalendar } from '../date-picker-calendar/date-picker-calendar.component';

@Component({
  selector: 'date-picker',
  template: `
<div id="date-picker-input-container" (click)="showDatePicker($event)">
  <span class="date-picker-date-display">6/1/2017</span>
  <ion-icon name="calendar" isActive="false"></ion-icon>
</div>
  `
})
export class DatePicker {
  constructor (private popoverCtrl: PopoverController) {
  }

  showDatePicker(clickEvent){
    console.log("show datepicker");
    let popover = this.popoverCtrl.create(DatePickerCalendar);
    popover.present(/*{ev: clickEvent}*/);
  }
}