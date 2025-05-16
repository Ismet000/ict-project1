import { Component, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';

interface PriorityTask {
  id: string;
  title: string;
  description: string;
  priority: 'Extreme' | 'High' | 'Moderate' | 'Low';
  status: 'Not Started' | 'In Progress' | 'Completed';
  createdOn: Date;
  selected?: boolean;
}

@Component({
  selector: 'app-priority',
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './priority.component.html',
  styleUrl: './priority.component.scss'
})
export class PriorityComponent {
  selectedTask = signal<PriorityTask | null>(null);
  
  tasks = signal<PriorityTask[]>([
    {
      id: '1',
      title: 'Walk the dog',
      description: 'Take the dog to the park and bring treats as well',
      priority: 'Extreme',
      status: 'Not Started',
      createdOn: new Date('2023-06-20')
    },
    {
      id: '2',
      title: 'Take grandma to hospital',
      description: 'Go back home and take grandma to the hospital',
      priority: 'Moderate',
      status: 'In Progress',
      createdOn: new Date('2023-06-20')
    }
  ]);

  priorities = ['Extreme', 'High', 'Moderate', 'Low'];
  statuses = ['Not Started', 'In Progress', 'Completed'];

  selectTask(task: PriorityTask) {
    // Deselect all other tasks
    this.tasks().forEach(t => t.selected = false);
    // Select current task
    task.selected = true;
    this.selectedTask.set(task);
  }

  updatePriority(task: PriorityTask, priority: string) {
    const updatedTasks = this.tasks().map(t => 
      t.id === task.id ? { ...t, priority: priority as any } : t
    );
    this.tasks.set(updatedTasks);
  }

  updateStatus(task: PriorityTask, status: string) {
    const updatedTasks = this.tasks().map(t => 
      t.id === task.id ? { ...t, status: status as any } : t
    );
    this.tasks.set(updatedTasks);
  }
}
