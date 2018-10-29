import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-devices-dashboard',
  templateUrl: './devices-dashboard.component.html',
  styleUrls: ['./devices-dashboard.component.css']
})
export class DevicesDashboardComponent implements OnInit {
  modalRef: BsModalRef

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  hideModal(clicked) {
    if (clicked == true)
      this.modalRef.hide()
  }

  openEditModal(clicked, template: TemplateRef<any>) {
    if (clicked == true)
      this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
}
