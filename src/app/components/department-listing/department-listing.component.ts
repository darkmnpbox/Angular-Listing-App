import { BaseListingComponent } from 'src/app/shared/baseComponent/base-listing.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-listing',
  templateUrl: './department-listing.component.html',
  styleUrls: ['./department-listing.component.css']
})
export class DepartmentListingComponent extends BaseListingComponent {

  constructor() {
    super();
    this.listName = 'Departments';
    this.defaultList = [
      {
        id: 1,
        name: 'ME',
      },
      {
        id: 2,
        name: 'CSE',
      },
      {
        id: 3,
        name: 'CHE',
      },
      {
        id: 4,
        name: 'PHY'
      }
    ];

  }


}
