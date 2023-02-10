import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { NgbDropdownModule, NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { LeaveComponent } from './leave/leave.component';
import { BsDropdownModule} from 'ngx-bootstrap';
import { SalaryComponent } from './salary/salary.component';
import { ProjectComponent } from './project/project.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap';
import { AddressComponent } from './address/address.component';
import { QuelificationComponent } from './quelification/quelification.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component'
// import { DataService} from './employee-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    DeshboardComponent,
    LeaveComponent,
    SalaryComponent,
    ProjectComponent,
    AddressComponent,
    QuelificationComponent,
    EmployeeDetailsPageComponent
  ],
  imports: [
    BsDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbDropdownModule,
    BsDropdownModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot()
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
