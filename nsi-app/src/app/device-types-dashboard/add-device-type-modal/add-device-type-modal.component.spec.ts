import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceTypeModalComponent } from './add-device-type-modal.component';

describe('AddDeviceTypeModalComponent', () => {
  let component: AddDeviceTypeModalComponent;
  let fixture: ComponentFixture<AddDeviceTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
