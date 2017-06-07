import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { ViewController, Modal, ModalController, NavParams } from 'ionic-angular';
import { ViewController, PopoverController, NavParams } from 'ionic-angular';
import { DatePickerCalendar } from '../date-picker-calendar/date-picker-calendar.component';
import Moment from "moment";

@Component({
  selector: 'date-picker',
  template: `
<div id="date-picker-input-container" (click)="showDatePicker($event)">
  <span class="date-picker-date-display">{{ selectedDateStr }}</span>
  <ion-icon name="calendar" isActive="false"></ion-icon>
</div>
  `
})
export class DatePicker {
  @Input()
  selectedDate;
  selectedDateStr;
  calendar;
  constructor (private popoverCtrl: PopoverController,
               public navParams: NavParams,
               public viewCtrl: ViewController) {
    this.calendar = DatePickerCalendar;
    this.selectedDateStr = Moment(this.selectedDate).format("MM-DD");
    console.log("constructor called");
  }

  showDatePicker(clickEvent){
    console.log("show datepicker", this.selectedDate);
    let popover = this.popoverCtrl.create(this.calendar, {'selectedDate': this.selectedDate});
    popover.present();
    popover.onDidDismiss( (data) => {
      let date = Moment(data);
      this.selectedDateStr = date.format("MM-DD");
    })
  }
}