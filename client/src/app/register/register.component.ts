import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public employeeService: EmployeeService, public router: Router) { }

  errorMessage: String

  ngOnInit() {
  }

  model:Employee = new Employee("","", "", 1, "")

  onSubmit() {
      this.employeeService.registerEmployee(this.model).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error)
          this.errorMessage = error.error.errorMessage;}
      )


  }

}
