import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeCount = 0;
  departmentCount = 0;
  constructor(
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    const employees =
      this.employeeService.getEmployees();
    this.employeeCount =
      employees.length;
    this.departmentCount =
      new Set(
        employees.map(
          emp => emp.department
        )
      ).size;
  }
}