import { BaseEditAddComponent } from './../../shared/baseComponent/base-edit-add.componet';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent extends BaseEditAddComponent implements OnInit {

  constructor(router: Router, activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
    this.listName = 'Employees'
    this.onSubmitNavigation = '/employee';
    if (this.id === 0) {
      this.selectedObj = {
        id: 0,
        name: '',
        age: 0
      }
    }
  }


}
