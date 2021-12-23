import { DepartmentAddEditComponent } from './components/department-add-edit/department-add-edit.component';
import { DepartmentListingComponent } from './components/department-listing/department-listing.component';
import { EmployeeAddEditComponent } from './components/employee-add-edit/employee-add-edit.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeListingComponent },
  { path: 'employee/add-edit/:id', component: EmployeeAddEditComponent },
  { path: 'department', component: DepartmentListingComponent },
  { path: 'department/add-edit/:id', component: DepartmentAddEditComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
