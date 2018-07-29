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

  public employees$: Observable<Array<Employee>>



  constructor(private employeeService: EmployeeService, public router: Router, private location: Location) { }

  ngOnInit() {
    console.log("test")
    this.employees$ = this.employeeService.getEmployees()

  }

  btnClick() {
    this.router.navigate(['/register']);
  }

  removeEmployee(employee_id: String) {
    console.log(employee_id)
    this.employeeService.deleteEmployee(employee_id).subscribe(
      (data) => {
        console.log(data)
        this.employees$ = this.employeeService.getEmployees()
      },
      error => console.log(error)
    )
  }

}
