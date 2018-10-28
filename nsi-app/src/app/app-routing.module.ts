import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceModalComponent } from 'src/app/devices-dashboard/add-device-modal/add-device-modal.component';
import { DeviceTypesDashboardComponent } from './device-types-dashboard/device-types-dashboard.component';
import { DevicesDashboardComponent } from './devices-dashboard/devices-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DevicesDashboardComponent},
  { path: 'add-device', component: AddDeviceModalComponent },
  { path: 'device-type-dashboard', component: DeviceTypesDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
