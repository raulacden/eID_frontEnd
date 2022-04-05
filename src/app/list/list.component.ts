import { Component, OnInit } from '@angular/core';
import { map} from 'rxjs/operators'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../shared/services/api.service';
import { Client } from '../shared/client';
import { AuthService } from '../shared/services/auth.service';

import {AddressModalComponent} from '../address-modal/address-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clientList = new Array<Client>();
  currentRole: String = '';

  constructor(
    private apiService: ApiService, 
    private authService: AuthService,
    private modalService: NgbModal) { }

  ngOnInit(): void {

    this.currentRole = this.authService.getRole;

    const rawData = this.apiService.getList()
    
    rawData.pipe(
      map((clients : Array<Client>) => 
        clients
        .filter(client => client.company.name == 'Yoigo')
        .sort((a,b)=> a.name.localeCompare(b.name))
      )
    ).subscribe(data => this.clientList = data);

  }


  openModal(client: Client) {
    const modalRef = this.modalService.open(AddressModalComponent,
      {
        keyboard: false,
        backdrop: 'static'
      });

    modalRef.componentInstance.fromParent = {
      name: client.name,
      streetA: client.address.streetA,
      streetB: client.address.streetB,
      streetC: client.address.streetC,
      streetD: client.address.streetD,
      city: client.address.city,
      state: client.address.state,
      country: client.address.country 
    };
  }  
}
