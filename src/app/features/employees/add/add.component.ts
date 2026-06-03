import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  employeeForm: any;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private snackBar: MatSnackBar
    ,private router: Router) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      salary: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(
        this.employeeForm.value
      );
       this.snackBar.open(
      'Employee Added Successfully',
      'Close',
      { duration: 3000 }
    );
      this.router.navigate(['/employees']);
    }
  }
}
