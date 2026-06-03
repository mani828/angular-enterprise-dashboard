import { Injectable } from '@angular/core';
import { Employee } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    employees: Employee[] = [];
  constructor() { 
    this.employees =
  JSON.parse(
    localStorage.getItem('employees') || '[]'
  );
   if (this.employees.length === 0) {
      this.employees = [
        {
          id: 1,
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
        }
      ];
      localStorage.setItem(
        'employees',
        JSON.stringify(this.employees)
      );
    }
  }
     getEmployees() {
    return this.employees;
  }
  deleteEmployee(id: number) {
  this.employees = this.employees.filter(
    emp => emp.id !== id
  );
  localStorage.setItem(
      'employees',
      JSON.stringify(this.employees)
    );
}
addEmployee(employee: Employee) {
  employee.id = this.employees.length + 1;
  this.employees.push(employee);
  localStorage.setItem(
  'employees',
  JSON.stringify(this.employees)
);
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
  localStorage.setItem(
        'employees',
        JSON.stringify(this.employees)
      );
}
}
