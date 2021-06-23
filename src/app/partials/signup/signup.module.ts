import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../../library/form/form.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  declarations: [
    SignupComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class SignupModule { }
