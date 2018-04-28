import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {NavigateComponent} from './navigate.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppService} from './app.service';
import {CreateModalComponent} from './create-modal.component';
import {EditModalComponent} from './edit-modal.component';
import {HomeComponent} from './home.component';
import {ModalComponent} from './modal.component';

import {Ng2SmartTableModule} from 'ng2-smart-table';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import{ButtonRenderComponent} from './button-render.component';
import {ImageRenderComponent} from './image-render.component';

@NgModule({
  imports: [ BrowserModule,
  Ng2SmartTableModule,
  AppRoutingModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
  Ng2Bs3ModalModule ],
  declarations: [ AppComponent,
  HomeComponent,
  ModalComponent,
  CreateModalComponent,
  EditModalComponent,
  NavigateComponent,
  ButtonRenderComponent,
  ImageRenderComponent],
  entryComponents: [
    ButtonRenderComponent, 
    ImageRenderComponent],
  bootstrap: [ NavigateComponent ],
  providers: [AppService]
})
export class AppModule {}