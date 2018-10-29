import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceType } from 'src/app/device-type';

@Component({
  selector: 'app-add-device-type-modal',
  templateUrl: './add-device-type-modal.component.html',
  styleUrls: ['./add-device-type-modal.component.css']
})
export class AddDeviceTypeModalComponent implements OnInit {

  model = new DeviceType(1, '', '');
  properties = ['light sensor', 'temperature sensor', 'motion sensor', 'door sensor', 'window sensor'];
  submitted = false;

  @Output()
  public closeClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() {
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit() {
    this.submitted = true;
  }

  onClose() {
    this.closeClick.emit(true);
  }
}
