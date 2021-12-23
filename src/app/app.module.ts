import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { EmployeeAddEditComponent } from './components/employee-add-edit/employee-add-edit.component';
import { DepartmentAddEditComponent } from './components/department-add-edit/department-add-edit.component';
import { DepartmentListingComponent } from './components/department-listing/department-listing.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListingComponent,
    HomeComponent,
    EmployeeAddEditComponent,
    DepartmentAddEditComponent,
    DepartmentListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
