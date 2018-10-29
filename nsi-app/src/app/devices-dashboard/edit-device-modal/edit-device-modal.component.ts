import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Device } from 'src/app/device';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-device-modal',
  templateUrl: './edit-device-modal.component.html',
  styleUrls: ['./edit-device-modal.component.css']
})
export class EditDeviceModalComponent implements OnInit {

  types = ['light sensor', 'temperature sensor', 'motion sensor', 'door sensor', 'window sensor'];

  model = new Device(1,'Philips Hue White',this.types[0],'smart bulb');

  submitted = false;

  @Output()
  public closeClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  onClose() {
    this.closeClick.emit(true);
  }

}
