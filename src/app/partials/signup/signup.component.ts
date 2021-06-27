import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../utils';
import { OffersModel } from '../../models/offers.model';
import {FormDataModel} from '../../models/form-data.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public iconPath: string = ICONS;
  public offers: OffersModel[] = [
    {
      icon: 'security',
      text: 'Secure payments through reliable partners'
    },
    {
      icon: 'svg',
      text: 'Fast transfers'
    },
    {
      icon: 'svg',
      text: 'Fair commissions'
    },
    {
      icon: 'svg',
      text: 'Best available rates'
    },
    {
      icon: 'svg',
      text: 'Convenience'
    }
  ];
  public formData: FormDataModel[] = [
    {
      label: 'Full Name',
      type: 'text',
      name: 'fullName',
      id: 'fullName',
      value: ''
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      id: 'email',
      pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
      value: ''
    },
    {
      label: 'Phone Number',
      type: 'number',
      name: 'phone',
      id: 'phoneNumber',
      pattern: '^5[0-9]{8}$',
      value: ''
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      value:'',
      id: 'password'
    },
    {
      label: 'Date',
      type: 'datepicker',
      name: 'date',
      value: '',
      readOnly: true
    },
    {
      type: 'button',
      name: 'btn',
      buttonText: 'Sign Up',
      buttonType: 'submit',
      value: ''
    },
    {
      type: 'checkbox',
      name: 'checkbox',
      value: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {}

  sendFormData(formData: any) {
    console.log('sendData', formData)
  }
}
