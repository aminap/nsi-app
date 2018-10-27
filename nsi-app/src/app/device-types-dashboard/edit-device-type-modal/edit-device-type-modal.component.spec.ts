import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceTypeModalComponent } from './edit-device-type-modal.component';

describe('EditDeviceTypeModalComponent', () => {
  let component: EditDeviceTypeModalComponent;
  let fixture: ComponentFixture<EditDeviceTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeviceTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
