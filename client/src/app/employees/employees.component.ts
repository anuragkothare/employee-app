import { Observable } from 'rxjs';
import { Employee } from './../Employee/employee';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees: Observable<Array<Employee>>

  constructor(private employeeService: EmployeeService, public router: Router, private location: Location) { }

  ngOnInit() {
    console.log("test")
    this.employees = this.employeeService.getEmployees()
    console.log("NgONIT called")
  }

  btnClick() {
    this.router.navigate(['/register']);
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
