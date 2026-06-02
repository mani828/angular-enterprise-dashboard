import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-list',
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
    private employeeService: EmployeeService
  ) {
    this.employees =
      this.employeeService.getEmployees();
  }
  editEmployee(employee: any) {
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
}
