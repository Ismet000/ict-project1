import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatDialog } from '@angular/material/dialog';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Moderate' | 'High' | 'Extreme';
  category: 'Work' | 'School' | 'Personal' | 'Other';
  status: 'Not Started' | 'In Progress' | 'Completed';
  createdOn: Date;
  deadline?: Date;
  additionalNotes?: string[];
  aiCategorized?: boolean;
  aiPrioritized?: boolean;
}

@Component({
  selector: 'app-task-list-my',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    TaskFormComponent
  ],
  templateUrl: './task-list-my.component.html',
  styleUrl: './task-list-my.component.scss'
})
export class TaskListMyComponent {
  selectedTask = signal<Task | null>(null);
  
  tasks = signal<Task[]>([
    {
      id: '1',
      title: 'Submit Documents',
      description: 'Make sure to submit all the necessary documents',
      priority: 'Extreme',
      category: 'Work',
      status: 'In Progress',
      createdOn: new Date('2025-03-20'),
      additionalNotes: [
        'Submit documents and don\'t forget',
        'Deadline for Submission: End of Day'
      ],
      aiCategorized: true,
      aiPrioritized: true
    },
    {
      id: '2',
      title: 'Complete assignments',
      description: 'The assignments must be completed to pass final year',
      priority: 'Moderate',
      category: 'School',
      status: 'Not Started',
      createdOn: new Date('2025-03-20')
    }
  ]);

  selectTask(task: Task) {
    this.selectedTask.set(task);
  }

  constructor(private dialog: MatDialog) {}

  openTaskForm() {
    this.dialog.open(TaskFormComponent, {
      width: '600px',
      maxWidth: '90vw'
    });
  }
}
