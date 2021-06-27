import {Component, HostListener, Input, OnInit } from '@angular/core';
import { FormOptionsModel } from '../../models/form-options.model';
import { FormDataModel } from '../../models/form-data.model';
import { ICONS } from '../../utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public options: FormOptionsModel = new FormOptionsModel();
  @Input() public formData: FormDataModel[] = [];
  @Input() public formStyles: any = {};
  @HostListener('document:click', ['$event'])
  click() {
    this.selectedFieldIndex = null;
  }
  public iconPath: string = ICONS;
  public selectedFieldIndex: any = null;
  public showPassword: boolean = false;
  public confirmed: boolean = false;
  public confirmedError: boolean = false;
  public showDatepicker: boolean = false;
  public description: string = '';
  public title: string = '';


  constructor() { }

  ngOnInit(): void { }


  onFieldClick(e: MouseEvent, idx: number) {
    e.stopPropagation();
    this.selectedFieldIndex = idx;
  }

  showPass() {
    this.showPassword = !this.showPassword;
  }

  resetConfirmError() {
    const timeOut = setTimeout(() => {
      this.confirmedError = false;
      clearTimeout(timeOut);
    }, 800);
  }

  submit(f: NgForm) {
    if (!this.confirmed) {
      this.confirmedError = true;
      this.resetConfirmError();
      return;
    }
    const sendData = {
      name: f.controls.fullName.value,
      email: f.controls.email.value,
      phoneNumber: f.controls.phone.value,
      password: f.controls.password.value
    }
    console.log('sendData', sendData)
  }


  onStrengthChanged(score: number) {
    if (score <= 20) {
      this.title = 'Weak password';
      this.description = 'Come up with a more difficult password';
    }
    if (score > 20 && score <= 60) {
      this.title = 'Average password';
      this.description = 'Good password';
    }
    if (score > 60) {
      this.title = 'Strong password';
      this.description = 'Great! This will do. Just do not forgot him';
    }
  }

  onDateSet(date: any) {
    console.log('ageee', date)
    console.log('123', this.formData.find(item => item.type === 'datepicker'))
    const datePickerValue = this.formData.find(item => item.type === 'datepicker');
    if (datePickerValue) {
      datePickerValue.value = date.stringFormat;
    }
    this.showDatepicker = false
  }
}
