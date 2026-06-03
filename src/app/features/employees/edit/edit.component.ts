import { Component , OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
   standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  employeeForm: any;
constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private employeeService: EmployeeService
){
  this.employeeForm = this.fb.group({
    id: [0],
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  department: ['', Validators.required],
  salary: ['', Validators.required]
});
}
ngOnInit() {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );
    const employee =
      this.employeeService.getEmployeeById(id);
    if (employee) {
      this.employeeForm.patchValue(employee);
    }}
 onSubmit() {
   if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(
        this.employeeForm.value
      );

      this.router.navigate(['/employees']);
    }
  }
}
