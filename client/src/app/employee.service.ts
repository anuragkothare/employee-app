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
    return this.http.get<Employee[]>(this.baseUrl+'/employees')
  }

  registerEmployee(model:Employee) {
    return this.http.post( this.baseUrl + '/employees/register', model)
  }

  deleteEmployee(id: String) {
    return this.http.delete(this.baseUrl+ '/employees'+ '/' + id)
  }
}
