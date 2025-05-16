import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SidebarService } from '../services/sidebar.service';

export interface Task {
  id: string;
  title: string;
  description: string;
  time?: string;
  location?: string;
  priority: 'Low' | 'Moderate' | 'High';
  status: 'Not Started' | 'In Progress' | 'Completed';
  createdOn: Date;
  completedOn?: Date;
}

@Component({
  selector: 'app-task-card',
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})



export class TaskCardComponent {
@Input() task!: Task;




constructor(private dialog: MatDialog, private taskService: SidebarService) {}

  async changeStatus(task: Task, newStatus: "Not Started" | "In Progress" | "Completed") {

  const previousStatus = task.status;
    
  // Update the task status
  task.status = newStatus;
  // Call your service to update the task
/* 
  try {
    await this.taskService.updateTaskList(task.id, newStatus).toPromise();
    console.log('Status updated successfully');
  } catch (error) {
    console.error('Update failed:', error);
    task.status = previousStatus; // Revert if failed
  } */

  /* this.taskService.updateTaskList(task).subscribe({
    next: () => {
      // Success handling

    },
    error: (err) => {
      console.error('Error updating task:', err);
    }
  }); */
}

deleteTask(task: Task) {
  /* const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Delete Task',
      message: 'Are you sure you want to delete this task?',
      confirmText: 'Delete',
      cancelText: 'Cancel'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.taskService.deleteTask(task.id).subscribe({
        next: () => {
          // Remove from local array or refresh data
        },
        error: (err) => {
          console.error('Error deleting task:', err);
        }
      });
    }
  }); */
}
}
