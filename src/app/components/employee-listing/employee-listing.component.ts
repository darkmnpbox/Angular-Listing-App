import { Component } from '@angular/core';
import { BaseListingComponent } from 'src/app/shared/baseComponent/base-listing.component';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent extends BaseListingComponent {

  constructor() {
    super();
    this.listName = 'Employees'
    this.defaultList = [
      {
        id: 1,
        name: 'niyas',
        age: 22
      },
      {
        id: 2,
        name: 'sanu',
        age: 20
      },
      {
        id: 3,
        name: 'sinu',
        age: 21
      },
      {
        id: 4,
        name: 'adham',
        age: 18
      }
    ];
  }



}
