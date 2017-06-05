import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'date-picker',
  // styleUrls: ['./date-picker.component.scss'],
  template: `
    <div>
      This is the calendar
    </div>
  `
})
export class DatePicker {
  constructor(public viewCtrl: ViewController) {}
}