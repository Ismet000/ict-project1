import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { TaskCardComponent } from "../../components/task-card/task-card.component";
import { TaskListComponent } from "../../components/task-list/task-list.component";
import { ProgressStatusComponent } from '../../components/progress-status/progress-status.component';
import { CompletedTasksComponent } from '../../components/completed-tasks/completed-tasks.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    TaskListComponent,
    ProgressStatusComponent,
    CompletedTasksComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
