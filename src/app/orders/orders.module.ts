import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
