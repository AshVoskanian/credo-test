import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: DatepickerComponent }
];



@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    RouterModule.forChild(routes) ,
    CommonModule
  ]
})
export class DatepickerModule { }
