import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-status',
  imports: [
    CommonModule
  ],
  templateUrl: './progress-status.component.html',
  styleUrl: './progress-status.component.scss'
})
export class ProgressStatusComponent {
  // In your component class

   statusData = [
    { 
      type: 'Completed',
      percentage: 84,
      color: '#4CAF50'
    },
    { 
      type: 'In Progress',
      percentage: 46,
      color: '#2196F3'
    },
    { 
      type: 'Not Started',
      percentage: 50,
      color: '#9E9E9E'
    }
  ];

  // If you need to calculate percentages dynamically
  calculatePercentages(tasks: any[]) {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const inProgress = tasks.filter(t => t.status === 'In Progress').length;
    const notStarted = tasks.filter(t => t.status === 'Not Started').length;

    this.statusData = [
      {
        type: 'Completed',
        percentage: Math.round((completed / total) * 100),
        color: '#4CAF50'
      },
      {
        type: 'In Progress',
        percentage: Math.round((inProgress / total) * 100),
        color: '#2196F3'
      },
      {
        type: 'Not Started',
        percentage: Math.round((notStarted / total) * 100),
        color: '#9E9E9E'
      }
    ];
  }
}
