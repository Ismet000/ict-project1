import { Component } from '@angular/core';


import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms'; // Add this import


interface DeletedTask {
  id: string;
  title: string;
  description: string;
  deletedDate: Date;
  dueDate: Date;
  priority: 'Low' | 'Moderate' | 'High';
  status: 'Not Started' | 'In Progress' | 'Completed';
  location?: string;
  category: string;
} 

@Component({
  selector: 'app-deleted-tasks',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers:[DatePipe],
  templateUrl: './deleted-tasks.component.html',
  styleUrl: './deleted-tasks.component.scss'
})
export class DeletedTasksComponent {

  deletedTasks: DeletedTask[] = [
    {
      id: '1',
      title: 'Attend Nischal\'s Birthday Party',
      description: 'Buy gifts on the way and pick up cake from the bakery.',
      deletedDate: new Date('2023-06-21'),
      dueDate: new Date('2023-06-22T18:00:00'),
      priority: 'Moderate',
      status: 'Not Started',
      location: 'Fresh Elements',
      category: 'Personal'
    },
    {
      id: '2',
      title: 'Landing Page Design for TravelDays',
      description: 'Get the work done by EOD and discuss with client before leaving.',
      deletedDate: new Date('2023-06-20'),
      dueDate: new Date('2023-06-20T16:00:00'),
      priority: 'Moderate',
      status: 'In Progress',
      location: 'Meeting Room',
      category: 'Work'
    },
    {
      id: '3',
      title: 'Conduct User Interviews',
      description: 'Interview 5 users about the new feature and compile report.',
      deletedDate: new Date('2023-06-18'),
      dueDate: new Date('2023-06-19T11:00:00'),
      priority: 'High',
      status: 'Not Started',
      category: 'Research'
    },
    {
      id: '4',
      title: 'Weekly Team Sync',
      description: 'Discuss project progress and blockers with the team.',
      deletedDate: new Date('2023-06-15'),
      dueDate: new Date('2023-06-15T10:00:00'),
      priority: 'Moderate',
      status: 'Completed',
      category: 'Work'
    },
    {
      id: '5',
      title: 'Renew Gym Membership',
      description: 'Visit the gym and renew annual membership before it expires.',
      deletedDate: new Date('2023-06-10'),
      dueDate: new Date('2023-06-15T12:00:00'),
      priority: 'Low',
      status: 'Not Started',
      location: 'FitLife Gym',
      category: 'Health'
    }
  ];



  constructor(private datePipe: DatePipe) {}

  restoreTask(task: DeletedTask) {
    // Implement restore logic
    console.log('Restoring task:', task.title);
    this.deletedTasks = this.deletedTasks.filter(t => t.id !== task.id);
  }

  permanentlyDelete(task: DeletedTask) {
    // Implement permanent delete logic
    console.log('Permanently deleting task:', task.title);
    this.deletedTasks = this.deletedTasks.filter(t => t.id !== task.id);
  }

  restoreAll() {
    // Implement restore all logic
    console.log('Restoring all tasks');
    this.deletedTasks = [];
  }

  emptyBin() {
    // Implement empty bin logic
    console.log('Emptying recycle bin');
    this.deletedTasks = [];
  }

  // Helper function to format time
  formatTime(date: Date): string {
    return this.datePipe.transform(date, 'h a') || '';
  }

  searchQuery: string = '';

  get filteredTasks(): DeletedTask[] {
  if (!this.searchQuery) {
    return this.deletedTasks;
  }
  const query = this.searchQuery.toLowerCase();
  return this.deletedTasks.filter(task => 
    task.title.toLowerCase().includes(query) ||
    task.description.toLowerCase().includes(query) ||
    task.category.toLowerCase().includes(query)
  );
} 
}
