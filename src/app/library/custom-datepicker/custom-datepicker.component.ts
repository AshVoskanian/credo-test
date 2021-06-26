import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../utils';
import { ListDataModel } from '../../models/list-data.model';
import { MONTHS} from '../../sahred/date';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss']
})
export class CustomDatepickerComponent implements OnInit {
  public selectedMonthValue: string = '';
  public selectedYear: string = '';
  public selectedMonth: string = '';
  public selectedDay: string = '';
  public daysInMonth: string = '';
  public startDayIndex: number = 0;
  public date = new window.Date();
  public weekDays: string[] = ['Mo','Tu','We', 'Th', 'Fri', 'Sa', 'Su'];
  public days: string[] = [];
  public months: ListDataModel[] = MONTHS;
  public years: ListDataModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getYears();
    this.onMonthSelect({name: this.months[this.date.getMonth()].name, value: this.date.getMonth().toString()});
    this.onDaySelect(this.date.getDate().toString())
  }

  getYears() {
    let currentYear = this.date.getFullYear();
    this.selectedYear = currentYear.toString();

    for(let i = currentYear; i < currentYear + 12; i++) {
      this.years.push({name: i.toString(), value: ''});
    }
  }

  getDaysInMonth() {
    let dt = new window.Date(`${this.selectedMonthValue}/1/${this.selectedYear}`);
    let month = dt.getMonth() + 1;
    let year = dt.getFullYear();
    this.daysInMonth = new window.Date(year, month, 0).getDate().toString();
    console.log(dt.getMonth());
    const currentWeekDay = dt.getDay();

    this.days = [];
    if (currentWeekDay !== 0) {
      this.startDayIndex = currentWeekDay - 1;
    } else {
      this.startDayIndex = 6;
    }
    for (let i = 0; i < this.startDayIndex; i++) {
      this.days.push('');
    }
    console.log('start', this.startDayIndex)

    for (let i = 1; i <= +this.daysInMonth; i++) {
      this.days.push(i.toString());
    }
  }

  onMonthSelect(month: ListDataModel) {
    this.selectedDay = ' ';
    this.selectedMonth = month.name;
    this.selectedMonthValue = month.value;
    this.getDaysInMonth();
    console.log('days in month',this.daysInMonth)
  }

  onYearSelect(year: ListDataModel) {
    this.selectedDay = ' ';
    this.selectedYear = year.name;
    this.getDaysInMonth();
    console.log('days in month',this.daysInMonth)
  }

  onDaySelect(day: string) {
    this.selectedDay = day || ' ';
  }

  onDateSet() {
    // Date format
    const date = new Date(`${this.selectedMonth}/${this.selectedDay}/${this.selectedYear}`);
    console.log('Date', date);
    // String
    const stringDate = this.selectedDay + '/' + this.selectedMonthValue + '/' + this.selectedYear;
    console.log('Date as string', stringDate);
  }

  onCancel() {

  }
}
