import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {  FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import {routingModule} from '../app/app-routing'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    routingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
