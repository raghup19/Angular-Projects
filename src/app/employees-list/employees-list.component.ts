import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public employees=[];

  constructor(private _empoyeeService : EmployeeService) { }

  ngOnInit(): void {
    this._empoyeeService.getEmployees().subscribe(data => this.employees = data);
  }

}
