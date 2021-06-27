export class FormDataModel {
  public label?: string = '';
  public type: string = '';
  public name: string = '';
  public id?: string = '';
  public autocomplete?: string = 'off';
  public buttonType?: string = 'submit';
  public buttonText?: string = '';
  public pattern?: string = '';
  public value: any = '';
  public maxLength?: any = null;
  public minLength?: any = null;
  public required?: boolean = true;
  public readOnly?: boolean = true;
}
