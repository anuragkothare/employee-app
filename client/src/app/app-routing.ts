import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";



const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  // {path: 'add', component: AddProductComponent},

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
