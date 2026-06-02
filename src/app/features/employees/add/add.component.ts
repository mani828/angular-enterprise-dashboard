import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  employeeForm: any;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService,
    private router: Router) {
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
      this.router.navigate(['/employees']);
    }
  }
}
