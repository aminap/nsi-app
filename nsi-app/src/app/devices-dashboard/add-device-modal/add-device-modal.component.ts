import { Component, OnInit } from '@angular/core';
import { Device }    from 'src/app/device';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.component.html',
  styleUrls: ['./add-device-modal.component.css']
})
export class AddDeviceModalComponent implements OnInit {

  types = ['light sensor', 'temperature sensor', 'motion sensor', 'door sensor', 'window sensor'];

  model = new Device(1,'Philips Hue White',this.types[0],'smart bulb');

  submitted = false;



  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  newDevice() {
    this.model = new Device(42, '', '','');
  }

  backClicked() {
    this._location.back();
}

}
