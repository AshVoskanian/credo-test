import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICONS} from '../../utils';
import {ListDataModel} from '../../models/list-data.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() public onListItemEmmit: EventEmitter<ListDataModel> = new EventEmitter<ListDataModel>();
  @Input() public listData: ListDataModel[] = [];
  @Input() public selectedItem: string = '';

  public iconPath: string = ICONS;


  constructor() {}

  ngOnInit(): void {}

  onListItemSelect(item: ListDataModel) {
    this.selectedItem = item.name;
    this.onListItemEmmit.emit(item);
  }
}
