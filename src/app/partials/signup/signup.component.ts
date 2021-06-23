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
      icon: 'svg',
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
      id: 'fullName'
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      id: 'email',
      autocomplete: 'off'
    },
    {
      label: 'Phone Number',
      type: 'text',
      name: 'phone',
      id: 'phoneNumber'
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      id: 'password'
    },
    {
      type: 'button',
      buttonText: 'Submit',
      buttonType: 'submit'
    },
    {
      type: 'checkbox',
      label: 'racxa'
    }
  ]

  constructor() { }

  ngOnInit(): void {}

}
