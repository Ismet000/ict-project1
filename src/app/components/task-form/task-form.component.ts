import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'  
})
export class TaskFormComponent {

  taskForm;

  priorities = [
    { value: 'Extreme', label: 'Extreme' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Low', label: 'Low' }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskFormComponent>
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['Moderate', Validators.required],
      description: [''],
      image: [null]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.dialogRef.close(this.taskForm.value);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.taskForm.patchValue({ image: file });
    }
  }
}
