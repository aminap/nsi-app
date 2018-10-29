import { Component, OnInit } from '@angular/core';
import { DeviceType } from 'src/app/device-type';

@Component({
  selector: 'app-edit-device-type-modal',
  templateUrl: './edit-device-type-modal.component.html',
  styleUrls: ['./edit-device-type-modal.component.css']
})
export class EditDeviceTypeModalComponent implements OnInit {

  constructor() { }

  model = new DeviceType(1, 'Sensor', 'This is a floating snsor');

  submitted = false;


  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
  }
}
