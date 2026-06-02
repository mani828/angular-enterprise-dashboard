import { Injectable } from '@angular/core';
import { Employee } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  employees: Employee[] = [{
    id:1,
    name: 'Prasad',
      email: 'prasad@test.com',
      department: 'Angular',
      salary: 800000
  },
  {
      id: 2,
      name: 'Ravi',
      email: 'ravi@test.com',
      department: 'Java',
      salary: 900000
    }]
     getEmployees() {
    return this.employees;
  }
  deleteEmployee(id: number) {
  this.employees = this.employees.filter(
    emp => emp.id !== id
  );
}
}
