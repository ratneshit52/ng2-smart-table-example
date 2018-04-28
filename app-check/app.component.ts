import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {AppService} from './app.service';
import { CreateModalComponent } from './create-modal.component';
import { EditModalComponent } from './edit-modal.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ButtonRenderComponent} from './button-render.component';
import {ImageRenderComponent} from './image-render.component';
import {OrderRequest} from './order-request';

@Component({
  selector: 'my-app',
  templateUrl: ['app.component.html'],
})

export class AppComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  orderRequests: OrderRequest[];
  customers: FormGroup;
  
  @ViewChild(CreateModalComponent)
  modalHtml: CreateModalComponent;

  @ViewChild(EditModalComponent)
  modalHtml1: EditModalComponent;
  
  settings = {
    mode: 'external',
    actions: {
      columnTitle: 'Actions'
    },
  columns: {
    id: {
      title: 'ID',
      filter: false
    },
    fullname: {
      title: 'Full Name',
      filter: false
    },
    location: {
      title: 'Location',
      filter: false
    },
    dp: {
      title: 'Display Picture',
      filter: false,
      type: 'custom',
      renderComponent: ImageRenderComponent
      //valuePrepareFunction: (dp) => { return `<img scr="dp" />`; }
    },
    button: {
      title: 'Button',
      filter: false,
      type: 'custom',
      renderComponent: ButtonRenderComponent
      //valueprepareFunction: (button) => { return `<button (click)="alert()">Click me</button>`; }
    }
  }
};

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.getOrderRequests();
  }
  
  ngOnInit() {
    this.customers = this.fb.group({
      id: [''],
      fullname: [''],
      location:[''],
      dp: [''],
      button: ['']
    });
  }
  
  onSearch(query: string = '') {
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'id',
                search: query
            },
            {
                field: 'fullname',
                search: query
            },
            {
                field: 'location',
                search: query
            }
        ], false);
    }
  
  getOrderRequests() {
        this.appService.getOrderRequests()
            .then((orderRequests) => {
                this.orderRequests = orderRequests;
                this.source.load(orderRequests);
            });
    }
    
    onCreate(event: any) {
        this.modalHtml.openModal(this.source);
    }

    onDelete(orderRequest: any) {
        this.appService.delete(orderRequest.data)
        .then(() => {
            this.orderRequests = this.orderRequests.filter(o => o !== orderRequest);
        });
        this.source.remove(orderRequest.data);
    }

    onSave(event: any) {
        this.appService.setDetails(event.data);
        this.modalHtml1.openModal(this.source);
    }
}