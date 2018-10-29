import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {
  modalRef: BsModalRef

  @Output()
  public editClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private modalService: BsModalService){
  }
  
  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  onEditClick(){
    this.editClick.emit(true);
  }
}
