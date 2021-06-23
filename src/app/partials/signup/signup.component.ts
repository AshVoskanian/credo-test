import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../utils';
import { OffersModel } from '../../models/offers.model';

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

  constructor() { }

  ngOnInit(): void {}

}
