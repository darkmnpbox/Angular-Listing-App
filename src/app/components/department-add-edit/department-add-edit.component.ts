import { BaseEditAddComponent } from './../../shared/baseComponent/base-edit-add.componet';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-add-edit',
  templateUrl: './department-add-edit.component.html',
  styleUrls: ['./department-add-edit.component.css']
})
export class DepartmentAddEditComponent extends BaseEditAddComponent {
  constructor(router: Router, activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
    this.listName = 'Departments'
    this.onSubmitNavigation = '/department';
    if (this.id === 0) {
      this.selectedObj = {
        id: 0,
        name: ''
      }
    }
  }

}
