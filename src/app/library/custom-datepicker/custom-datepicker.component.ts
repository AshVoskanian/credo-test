import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ListDataModel } from '../../models/list-data.model';
import { MONTHS} from '../../shared/date';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss']
})
export class CustomDatepickerComponent implements OnInit {
  @Output() public onSelectedDateEmmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onCancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  public selectedMonthValue: string = '';
  public showPopup: boolean = false;
  public selectedYear: string = '';
  public selectedMonth: string = '';
  public selectedDay: string = '';
  public daysInCurrentMonth: string = '';
  public daysInPrevMonth: string = '';
  public startDayIndex: number = 0;
  public date = new window.Date();
  public weekDays: string[] = ['Mo','Tu','We', 'Th', 'Fri', 'Sa', 'Su'];
  public days: any = [];
  public months: ListDataModel[] = MONTHS;
  public years: ListDataModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getYears();
    this.onMonthSelect({name: this.months[this.date.getMonth()].name, value: (this.date.getMonth() + 1).toString()});
    this.onDaySelect({value: this.date.getDate().toString(), active:true})
    setTimeout(() => {
      this.showPopup = true;
    });
  }

  getYears() {
    let currentYear = this.date.getFullYear();
    this.selectedYear = currentYear.toString();

    for(let i = currentYear; i < currentYear + 12; i++) {
      this.years.push({name: i.toString(), value: ''});
    }
  }

  getPrevMonthDays() {
    let prevMonthIndex: string;

    if (this.selectedMonthValue !== '1') {
      prevMonthIndex = (+this.selectedMonthValue - 1).toString();
    } else {
      prevMonthIndex = '12';
    }

    const prevMonth = new window.Date(`${prevMonthIndex}/1/${this.selectedYear}`);
    const month = prevMonth.getMonth() + 1;
    const year = prevMonth.getFullYear();
    this.daysInPrevMonth = new window.Date(year, month, 0).getDate().toString();
  }

  getCurrentDaysInMonth() {
    this.getPrevMonthDays();
    const currentDate = new window.Date(`${this.selectedMonthValue}/1/${this.selectedYear}`);
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const currentWeekDay = currentDate.getDay();
    this.daysInCurrentMonth = new window.Date(year, month, 0).getDate().toString();
    this.days = [];

    if (currentWeekDay !== 0) {
      this.startDayIndex = currentWeekDay - 1;
    } else {
      this.startDayIndex = 6;
    }

    for (let i = this.startDayIndex; i > 0; i--) {
      this.days.push({value: (+this.daysInPrevMonth + 1 - i).toString(), active: false});
    }

    for (let i = 1; i <= +this.daysInCurrentMonth; i++) {
      this.days.push({value: i.toString(), active: true});
    }

    const daysLength: number = this.days.length;

    if (daysLength < 42) {
      for (let i = 1; i <= 42 - daysLength; i++) {
        this.days.push({value: i.toString(), active: false})
      }
    }
  }

  onYearSelect(year: ListDataModel) {
    this.selectedDay = '';
    this.selectedYear = year.name;
    this.getCurrentDaysInMonth();
  }

  onMonthSelect(month: ListDataModel) {
    this.selectedDay = '';
    this.selectedMonth = month.name;
    this.selectedMonthValue = month.value;
    this.getCurrentDaysInMonth();
  }

  onDaySelect(day: any) {
    if (day.active) {
      this.selectedDay = day.value || ' ';
    }
  }

  onDateSet() {
    if (!this.selectedDay) {
      return;
    }

    // Date format
    const date = new Date(`${this.selectedMonth}/${this.selectedDay}/${this.selectedYear}`);

    // String
    const stringDate = String(this.selectedDay).padStart(2, '0') + '/' + String(this.selectedMonthValue).padStart(2, '0') + '/' + this.selectedYear;

    this.onSelectedDateEmmit.emit({
      stringFormat: stringDate,
      dateFormat: date
    })
  }
}
