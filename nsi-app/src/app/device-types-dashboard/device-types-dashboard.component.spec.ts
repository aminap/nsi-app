import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTypesDashboardComponent } from './device-types-dashboard.component';

describe('DeviceTypesDashboardComponent', () => {
  let component: DeviceTypesDashboardComponent;
  let fixture: ComponentFixture<DeviceTypesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceTypesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTypesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
