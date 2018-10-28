import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesDashboardComponent } from './devices-dashboard/devices-dashboard.component';
import { DeviceTypesDashboardComponent } from './device-types-dashboard/device-types-dashboard.component';
import { DeviceCardComponent } from './devices-dashboard/device-card/device-card.component';
import { AddDeviceModalComponent } from './devices-dashboard/add-device-modal/add-device-modal.component';
import { DeleteDeviceModalComponent } from './devices-dashboard/delete-device-modal/delete-device-modal.component';
import { EditDeviceModalComponent } from './devices-dashboard/edit-device-modal/edit-device-modal.component';
import { AddDeviceTypeModalComponent } from './device-types-dashboard/add-device-type-modal/add-device-type-modal.component';
import { EditDeviceTypeModalComponent } from './device-types-dashboard/edit-device-type-modal/edit-device-type-modal.component';
import { DeleteDeviceTypeModalComponent } from './device-types-dashboard/delete-device-type-modal/delete-device-type-modal.component';

import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DevicesDashboardComponent,
    DeviceTypesDashboardComponent,
    DeviceCardComponent,
    AddDeviceModalComponent,
    DeleteDeviceModalComponent,
    EditDeviceModalComponent,
    AddDeviceTypeModalComponent,
    EditDeviceTypeModalComponent,
    DeleteDeviceTypeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
