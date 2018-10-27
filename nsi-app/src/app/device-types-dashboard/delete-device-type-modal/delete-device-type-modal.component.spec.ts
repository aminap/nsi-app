import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeviceTypeModalComponent } from './delete-device-type-modal.component';

describe('DeleteDeviceTypeModalComponent', () => {
  let component: DeleteDeviceTypeModalComponent;
  let fixture: ComponentFixture<DeleteDeviceTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDeviceTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeviceTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
