import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home.component';
import { AppComponent }      from './app.component';
import {NavigateComponent} from './navigate.component';

const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'app', component: AppComponent },
  { path: 'nav', component: NavigateComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}