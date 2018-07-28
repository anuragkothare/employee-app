import { Employee } from './Employee/employee';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  public baseUrl = "http://localhost:5000/api"

  getEmployees() {
    return this.http.get<Employee[]>('api/employees')
  }

  registerEmployee(model:Employee) {
    return this.http.post('api/employees/register', model)
  }
}
