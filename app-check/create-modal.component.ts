import { Component, ViewChild, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OrderRequest } from './order-request';
import { AppService } from './app.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'mm-create-modal',
    templateUrl: 'create-modal.component.html',
    styleUrls: ['create-modal.component.css'],
})
export class CreateModalComponent implements OnInit {

    orderRequests: OrderRequest[] = [];
    userDetails: FormGroup;
    source: LocalDataSource;
    @Input() orderRequest: OrderRequest;

    @ViewChild('modal')
    modal: CreateModalComponent;

    constructor(
        private fb: FormBuilder,
        private appService: AppService
    ) {
     }

    ngOnInit(): void {
        this.userDetails = this.fb.group({
            location: [''],
            fullname: ['']
        });
    }

    open(size: string) {
        this.modal.open(size);
    }
    
    openModal(source) {
      this.source = source;
      this.open('sm');
    }

    onSubmit({ value, valid }: { value: OrderRequest, valid: boolean }) {
        this.add({ value, valid });
        this.modal.close();
    }

    close() {
        this.modal.close();
    }

    add({ value, valid }: { value: OrderRequest, valid: boolean }): void {
        let result = JSON.stringify(value);
        if (!result) {
            return;
        }
        this.appService.create(value)
            .then(orderRequest => {
                this.orderRequests.push(orderRequest);
                this.source.add(orderRequest);
                this.source.refresh();
            });
    }
}
