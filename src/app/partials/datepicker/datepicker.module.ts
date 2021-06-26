import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomDatepickerComponent } from '../../library/custom-datepicker/custom-datepicker.component';
import { DropdownDirective } from '../../directives/dropdown.directive';
import { DropdownComponent } from '../../library/dropdown/dropdown.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: DatepickerComponent }
];



@NgModule({
  declarations: [
    DatepickerComponent,
    CustomDatepickerComponent,
    DropdownComponent,
    DropdownDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class DatepickerModule { }
