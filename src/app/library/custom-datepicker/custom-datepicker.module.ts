import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatepickerComponent } from './custom-datepicker.component';
import { DropdownDirective } from '../../directives/dropdown.directive';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomDatepickerComponent,
    DropdownDirective,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomDatepickerComponent,
    DropdownComponent,
    DropdownDirective
  ]
})
export class CustomDatepickerModule { }
