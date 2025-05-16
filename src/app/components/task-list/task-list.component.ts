import { Component, inject, OnInit } from '@angular/core';
import { Task, TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskCardComponent,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  
  taskListService = inject(SidebarService);


  ngOnInit(): void {
    this.taskListService.getTaskList().subscribe({
      next: (res) => {
        this.taskListData = res;
      },
      error:(err) => {
        console.log("Failed to load education data",err); 
      }
    })
  }

  taskListData!: Task[];


  /* tasks: Task[] = [
    {
      id: '1',
      title: 'Attend Nischal\'s Birthday Party',
      description: 'Buy gifts on the way and pick up cake from the bakery.',
      time: '6 PM',
      location: 'Fresh Elements',
      priority: 'Moderate',
      status: 'Not Started',
      createdOn: new Date('2023-06-20')
    },
    {
      id: '2',
      title: 'Landing Page Design for TravelDays',
      description: 'Get the work done by EOD and discuss with client before leaving.',
      time: '4 PM',
      location: 'Meeting Room',
      priority: 'Moderate',
      status: 'In Progress',
      createdOn: new Date('2023-06-20')
    }
  ]; */
}
