import { Component, Input, OnInit } from '@angular/core';
import { FormOptionsModel } from '../../models/form-options.model';
import {FormDataModel} from '../../models/form-data.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public options: FormOptionsModel = new FormOptionsModel();
  @Input() public formData: FormDataModel[] = [];

  constructor() { }

  ngOnInit(): void { }

}
