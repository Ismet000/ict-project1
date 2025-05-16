import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../task-card/task-card.component';
import { CommonModule, DatePipe } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';
@Component({
  selector: 'app-completed-tasks',
  imports: [
    CommonModule
  ],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.scss'
})
export class CompletedTasksComponent implements OnInit {
  
  
  complitedTaskService = inject(SidebarService);
  
  ngOnInit(): void {
    this.complitedTaskService.getCompletedTask().subscribe({
      next: (res) => {
        this.complitedTasksData = res;
      },
      error: (err) => {
        console.log('Failed to load complitedTasks data', err);
      }
    })
  }

  complitedTasksData!: Task[];


  /* completedTasks: Task[] = [
    {
      id: '3',
      title: 'Walk the dog',
      description: 'Take the dog to the park and bring treats as well.',
      priority: 'Moderate',
      status: 'Completed',
      createdOn: new Date('2023-06-18'),
      completedOn: new Date('2023-06-18')
    },
    {
      id: '4',
      title: 'Conduct meeting',
      description: 'Meet with the client and finalize requirements.',
      priority: 'High',
      status: 'Completed',
      createdOn: new Date('2023-06-18'),
      completedOn: new Date('2023-06-18')
    }
  ]; */
}
