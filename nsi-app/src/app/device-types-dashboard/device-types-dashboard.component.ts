import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-device-types-dashboard',
  templateUrl: './device-types-dashboard.component.html',
  styleUrls: ['./device-types-dashboard.component.css']
})
export class DeviceTypesDashboardComponent implements OnInit {
  modalRef: BsModalRef

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  hideModal(clicked) {
    if (clicked == true)
      this.modalRef.hide()
  }
}
