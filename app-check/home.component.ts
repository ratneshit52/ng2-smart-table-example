import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {AppService} from './app.service';
import {ModalComponent} from './modal.component';
import {OrderRequest} from './order-request';

@Component({
  selector: 'my-home',
  templateUrl: ['home.component.html']
})

export class HomeComponent implements OnInit {
  orderRequests: OrderRequest[];
  customers: FormGroup;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.getOrderRequests();
  }
  
  ngOnInit() {
    this.customers = this.fb.group({
      id: [''],
      fullname: [''],
      location:['']
    });
  }
  
  getOrderRequests() {
        this.appService.getOrderRequests()
            .then((orderRequests) => {
                this.orderRequests = orderRequests;
            });
    }
    
    open(){
      this.modal.open();
    }
}