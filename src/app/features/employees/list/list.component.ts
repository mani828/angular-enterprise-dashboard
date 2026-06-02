import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employees.model';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,
    MatTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'department',
    'salary',
    'actions'
  ];
employees: Employee[] = [];
 constructor(
    private employeeService: EmployeeService,
  private router: Router
  ) {
    this.employees =
      this.employeeService.getEmployees();
  }
  editEmployee(employee: any) {
     this.router.navigate([
    '/employees/edit',
    employee.id
  ]);
  console.log('Edit', employee);
}
 deleteEmployee(id: number) {
  const confirmed = confirm(
    'Are you sure you want to delete this employee?'
  );
  if(confirmed){
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees();
  }
}
goToAddEmployee() {
  this.router.navigate(['/employees/add']);
}
}
