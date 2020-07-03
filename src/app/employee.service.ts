import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(){
    return [
      {"id":1,"name":"Raghu","age":24},
      {"id":2,"name":"Siddu","age":27}
    ]
  }
}
