import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deptLength: number = 0;
  emplLength: number = 0;

  constructor() {
    this.deptLength = localStorage.getItem('Departments') ? JSON.parse(localStorage.getItem('Departments')!).length : 4;
    this.emplLength = localStorage.getItem('Employees') ? JSON.parse(localStorage.getItem('Employees')!).length : 4;
  }

  ngOnInit(): void {
  }

}
