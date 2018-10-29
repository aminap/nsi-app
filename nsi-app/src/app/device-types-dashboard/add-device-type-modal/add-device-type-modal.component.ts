import { Component, OnInit } from '@angular/core';
import { DeviceType } from 'src/app/device-type';

@Component({
  selector: 'app-add-device-type-modal',
  templateUrl: './add-device-type-modal.component.html',
  styleUrls: ['./add-device-type-modal.component.css']
})
export class AddDeviceTypeModalComponent implements OnInit {

  model = new DeviceType(1, '', '');

  submitted = false;

  constructor() { }
  
  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
  }
}
