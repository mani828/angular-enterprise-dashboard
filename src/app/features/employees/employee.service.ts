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
addEmployee(employee: Employee) {
  employee.id = this.employees.length + 1;
  this.employees.push(employee);
}
getEmployeeById(id: number) {
  return this.employees.find(emp => emp.id === id);
}

updateEmployee(updatedEmployee: Employee) {
  const index = this.employees.findIndex(
    emp => emp.id === updatedEmployee.id
  );

  if (index !== -1) {
    this.employees[index] = updatedEmployee;
  }
}
}
