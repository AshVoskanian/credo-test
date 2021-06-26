import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../../library/form/form.component';
import { FormsModule } from '@angular/forms';
import { DisableAutocompleteDirective } from '../../directives/disable-autocomplete.directive';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

const routes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  declarations: [
    SignupComponent,
    FormComponent,
    DisableAutocompleteDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatPasswordStrengthModule
  ]
})
export class SignupModule { }
